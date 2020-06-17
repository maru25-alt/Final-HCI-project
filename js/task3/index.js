const rootElement = document.getElementById('root');

 class Task2 extends React.Component {
    state = {
        width: 1200,
        height: 300,
        margin :{top: 10, right: 80, bottom: 30, left: 80},
        tempData: [],
        rainData: [],
        country: 'Zimbabwe',
        pieData: [],
        selectedContinent : "AFRICA",
        descriptionData: {
            capital_city: "Harare",
            country: "Zimbabwe",
            currency: "Zimbabwean dollar",
            gdp: "12041655200",
            latitude: "-19.015438",
            longitude: "29.154857",
            population: "12700000",
            president: "Emerson Mnangagwa",
    }
}

handleChangeContinent = (e) => {
    console.log(e.target.value)
    this.setState({
        selectedContinent: e.target.value
    });
    d3.csv(`https://raw.githubusercontent.com/Brenda199708/hcidataset2/master/${e.target.value}_Countries.csv`).then(data => {

    data.forEach(e => {
        e.Algeria = +e.Algeria;
                e.Zimbabwe = +e.Zimbabwe;
                e.Egypt = + e.Egypt;
                e.Nigeria = +e.Nigeria;
                e.Kenya = +e.Kenya;
                e["South Africa"] = +e["South Africa"];
                e["United States"] = +e["United States"];
                e.Colombia  = +e.Colombia
                e.Agentina = +e.Agentina 
                e.Brazil =  +e.Brazil
                e.Canada =  +e.Canada
                e.Poland = +e.Poland
                e["United Kingdom"] =  +e["United Kingdom"]
                e.Sweden = +e.Sweden
                e.China =  +e.China
                e.Iran =  +e.Iran
                e.India = +e.India 
                e.Russia = +e.Russia
                e.Austrilia = +e.Austrilia
    })
        this.renderGraph(data)

    })



}

    handleChange = (d) => {
        let country = d.key
        let currentYear = d.year
        console.log(d)
        this.setState({
            country,

        })
       // console.log('click', d.key);
        var tempPie = [];
        var rainPie = [];
        
        d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/description.csv').then(data =>{
            
            var countryData = data.filter(e => {
                return e.country === country
            })
            console.log(countryData)
            this.setState({
                descriptionData: countryData[0]
            })


        })

     d3.csv(`https://raw.githubusercontent.com/maru25-alt/data/master/year${currentYear}.csv`)
        .then(data => {

           var  pieData = data.filter(e => {
                return e.country === country
            })
          
         var pie =    Object.keys(pieData[0]).map((i ) => {
              //  console.log( i, pieData[0][i])
               return {label: i, value:pieData[0][i]}
   
            })
            pie  = pie.splice(3, 27);
   
             rainPie = pie.splice(12, 24)
            rainPie.forEach(e => {
                e.value = +e.value
            })
   
             tempPie = pie.splice(0,12)
            tempPie.forEach(e => {
               e.value = +e.value
           })

           let tempRadar = [];
           tempRadar.push(tempPie);

          let rainRadar = [];
          rainRadar.push(rainPie)

            RadarChart(".temperature", tempRadar, this.radarChartOptions);
            RadarChart(".rain", rainRadar, this.radarChartOptionsRainFall);  
        })
      

    }
    
    renderGraph = (data) => {

        var width = this.state.width - this.state.margin.right - this.state.margin.left;
        var height = this.state.height - this.state.margin.top - this.state.margin.right
        var front = 0;
        var back = 0;
        var depth = 100 - front - back;


        var  legend = svg => {
            const g = svg
                .attr("transform", `translate(${width},5)`)
                .attr("text-anchor", "end")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                //.attr("color", "red")
              .selectAll("g")
              .data(color.domain().slice().reverse())
              .join("g")
                .attr("transform", (d, i) => `translate(0,${i * 15})`);
          
            g.append("rect")
                .attr("x", -19)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill", color);
          
            g.append("text")
                .attr("x", -24)
                .attr("y", 9.5)
                .attr("dy", "0.35em")
                .text(d => d);

               
          }
  

      var keys = data.columns.slice(1)

      var  groupKey = data.columns[0]

      var  x0 = d3.scaleBand()
        .domain(data.map(d => d[groupKey]))
        .rangeRound([this.state.margin.left, width - this.state.margin.right])
        .paddingInner(0.1);

      var  x1 = d3.scaleBand()
        .domain(keys)
        .rangeRound([0, x0.bandwidth()])
        .padding(0.05)

     var   y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d3.max(keys, key => d[key]))]).nice()
    .rangeRound([height , this.state.margin.top])


    var color = d3.scaleOrdinal()
    .range(["#13ebff", "#2f4b7c", "#665191", "#fee090", "#a05195", "#d45087", "#f95d6a", "#ff7c43", "#ffa600"])


   var xAxis = g => g
    .attr("transform", `translate(0,${height })`)
    .call(d3.axisBottom(x0).tickSizeOuter(0))
    .call(g => g.select(".domain").remove())


    var yAxis = g => g
    .attr("transform", `translate(${this.state.margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, "s"))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))

        const svg = d3.select('#bar')
       // .append("svg")
        .attr("width", this.state.width)
        .attr("height", this.state.height);

        svg.selectAll('*').remove();
        svg.append("g")
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", d => `translate(${x0(d[groupKey])},0)`)
        .selectAll("rect")
        .data(d =>{
           
           return  keys.map(key => ({key, value: d[key], year: d.year}))
            })
        .join("rect")
        .attr("x", d => x1(d.key))
        .attr("y", d => y(d.value))
        .attr("width", x1.bandwidth())
        .attr("height", d => y(0) - y(d.value))
        .attr("fill", d => color(d.key))
        .attr("class", "selectedBar")
        .on("click", d => {
            //console.log( d3.select(this))
          // d3.select(this).style("fill", "red");
          return this.handleChange(d)
        })
        // .on("mouseover", function(d) {
        //     console.log( d3.select(this))
        //     d3.select(this).style("fill", color(d.value));
        // })
        // .on("mouseout", function(d) {
        //     d3.select(this).style("fill", color(d.value));
        // });
  


      svg.append("g")
        .call(xAxis);

        svg.append("g")
            .call(yAxis);

        svg.append("g")
            .call(legend);


     svg.select('.y').transition().duration(500).delay(1300).style('opacity','1');
    }




     color = d3.scaleOrdinal()
    .range(["#CC333F","#00A0B0"]);
    colorRainfall = d3.scaleOrdinal().range(["#25f1f5","#3fb559"])
    
    radarChartOptions =  {
        w: 200,
        h: 230,
        margin: this.state.margin,
        maxValue: 0.9,
        levels: 8,
        roundStrokes: true,
        color: this.color

    }
    radarChartOptionsRainFall = {
        w: 200,
        h: 230,
        margin: this.state.margin,
        maxValue: 0.9,
        levels: 8,
        roundStrokes: true,
        color: this.colorRainfall


    }
   
    componentWillMount(){
        Promise.all([
            d3.csv('https://raw.githubusercontent.com/Brenda199708/hcidataset2/master/AFRICA_Countries.csv'),
            d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2010.csv'),
          
        ]).then(([barData, data]) => {
          
            barData.forEach(e => {
                // Object.keys(e).forEach(function(key) {
                //     e[key] = +data.key;
                //   });
                e.Algeria = +e.Algeria;
                e.Zimbabwe = +e.Zimbabwe;
                e.Egypt = + e.Egypt;
                e.Nigeria = +e.Nigeria;
                e.Kenya = +e.Kenya;
                e["South Africa"] = +e["South Africa"]
            })

         var pieData = data.filter(e => {
             return e.country === this.state.country
         })
       
      var pie =    Object.keys(pieData[0]).map((i ) => {
           //  console.log( i, pieData[0][i])
            return {axis: i, value:pieData[0][i]}

         })
         pie  = pie.splice(3, 27);

         var rainPie = pie.splice(12, 24)
         rainPie.forEach(e => {
             e.value = +e.value
         })

         var tempPie = pie.splice(0,12)
         tempPie.forEach(e => {
            e.value = +e.value
        })
         
         this.setState({
             rainData: rainPie,
             tempData: tempPie,
             pieData,
         })
            this.renderGraph(barData)
          
           let tempRadar = [];
           tempRadar.push(tempPie);

          let rainRadar = [];
          rainRadar.push(rainPie)

            RadarChart(".temperature", tempRadar, this.radarChartOptions);
            RadarChart(".rain", rainRadar, this.radarChartOptionsRainFall);


        })  
        
        d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/description.csv').then(data =>{
            
            var countryData = data.filter(e => {
                return e.country === this.state.country
            })
            console.log(countryData)
            this.setState({
                descriptionData: countryData[0]
            })


        })
    }

    render() {

        let data = this.state.descriptionData;
        console.log(data)
        return (
            <div>
               
                <div className='row'>
                    <div className=" col-9 row">
                      <div className="temperature"></div>
                      <duv className="rain"></duv>
                    </div>
                    {/* <svg id='pie'></svg> */}
                   <div className='col-3 description'> 
                       <h5>About Selected Country  </h5> 
                        <span>Country: {data.country}</span> <br></br>
                        <span>GPS  lat: {data.latitude} long: {data.longitude}</span> <br></br>
                        <span>Capital City : {data.capital_city} </span> <br></br>
                        <span>Population: {data.population}</span> <br></br>
                        <span>GDP: {data.gdp}</span> <br></br>
                        <span>Currency: {data.currency}</span> <br></br>
                        <span>President: {data.president}</span> <br></br>
                        
                   </div>
                   
                </div>
           
            <svg id='bar'></svg>
            <div className="continents">
               
                <div className="form-check continent">
                    <input onClick={this.handleChangeContinent} className="form-check-input" type="radio" name="exampleRadios" id="africa" value="AFRICA" defaultChecked/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                       Africa
                    </label>
                </div>
                <div className="form-check continent">
                    <input onClick={this.handleChangeContinent} className="form-check-input" type="radio" name="exampleRadios" id="africa" value="ASIA" />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                      Asia
                    </label>
                </div>
                <div className="form-check continent">
                    <input onClick={this.handleChangeContinent} className="form-check-input" type="radio" name="exampleRadios" id="america" value="AMERICA" />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                    America
                    </label>
                </div>
                <div className="form-check continent">
                    <input onClick={this.handleChangeContinent} className="form-check-input" type="radio" name="exampleRadios" id="europe" value="EUROPE" />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                    Europe
                    </label>
                </div>
                <div className="form-check continent">
                    <input onClick={this.handleChangeContinent} className="form-check-input" type="radio" name="exampleRadios" id="australia" value="AUSTRALIA" />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                    Australia
                    </label>
                </div>
               

            </div>

            </div>
           
        )
    }
}


function App(){
    return(
    <div>
      <Task2 />
    </div>
    
    )}


ReactDOM.render(
    <App />,
    rootElement
  )


  