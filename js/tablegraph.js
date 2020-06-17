const rootElement = document.getElementById("root");

class Table extends React.Component {
  render() {
  
    let month =
      typeof this.props.currentData[0] === "undefined"
        ? {}
        : this.props.currentData[0];
    return (
      <div className="entire_week_container">
        <div className="entire_week">
          <div className="week-temp">
            <div>
              <h6 className="degree">Temperatures &#8451;</h6>
            </div>
            <div>
              <h6 className="degree">Rainfall mm</h6>
            </div>
          </div>
          <div className="whole-week">
            <div className="week_day boxA">
              <div>
                <h6 className="day">January</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
              <div className="max">{month.January_Avg_temp}</div>
              <div className="min">{month.January_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">February</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>

              <div className="max">{month.February_Avg_temp}</div>
              <div className="min">{month.February_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">March</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
              <div className="max">{month.March_Avg_temp}</div>
              <div className="min">{month.March_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">April</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>

              <div className="max">{month.April_Avg_temp}</div>
              <div className="min">{month.April_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">May</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
              <div className="max">{month.May_Avg_temp}</div>
              <div className="min">{month.May_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">June</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
              <div className="max">{month.June_Avg_temp}</div>
              <div className="min">{month.June_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">July</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
                        <div className="max">{month.July_Avg_temp}</div>
                        <div className="min">{month.July_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">August</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
              <div className="max">{month.August_Avg_temp}</div>
              <div className="min">{month.August_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">September</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
              <div className="max">{month.September_Avg_temp}</div>
              <div className="min">{month.September_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">October</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
              <div className="max">{month.October_Avg_temp}</div>
              <div className="min">{month.October_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">November</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
              <div className="max">{month.November_Avg_temp}</div>
              <div className="min">{month.November_rain}</div>
            </div>

            <div className="week_day boxA">
              <div>
                <h6 className="day">December</h6>
              </div>

              <div className="icon_container">
                <span className="icon">
                  <i className="fas fa-sun"></i>
                </span>
              </div>
              <div className="max">{month.December_Avg_temp}</div>
              <div className="min">{month.December_rain}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Multiple extends React.Component{
  state = {
    width : 1200,
    height : 400
  }
  renderGraph = ()=>{
    if(typeof(this.props.data) !== undefined){
      var data = this.props.data
      console.log(data)

      const svg = d3.select('#linegraph');
      
      svg.selectAll('*').remove();
      const xValue = d => d.month;
      const xAxisLabel = 'months';
      
      const yValue = d => d.value;
      const yAxisLabel = 'Temperature';
      const colorValue = d => d.symbol;

      const margin = { top: 60, right: 200, bottom: 88, left: 50 };
      const innerWidth = this.state.width - margin.left - margin.right;
      const innerHeight = this.state.height - margin.top - margin.bottom;


      var lineOpacity = "0.5";
      var lineOpacityHover = "0.85";
      var otherLinesOpacityHover = "0.3";
      var lineStroke = "1.5px";
      var lineStrokeHover = "2.5px";

      var circleOpacity = '0.85';
      var circleOpacityOnLineHover = "0.25"
      var circleRadius = 10;
      var circleRadiusHover = 6;
      var duration = 250;


      const xScale = d3.scaleTime()
      .domain(d3.extent(data, xValue))
      .range([0, innerWidth])
      .nice();
    
    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, yValue))
      .range([innerHeight, 0])
      .nice();
    
    const colorScale = d3.scaleOrdinal(["#0D9BA8", "#FFB961"]);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const xAxis = d3.axisBottom(xScale)
      .tickSize(-innerHeight)
      .tickPadding(10);
    
    const yAxis = d3.axisLeft(yScale)
      .tickSize(-innerWidth)
      .tickPadding(10);

    const yAxisG = g.append('g').call(yAxis);
    yAxisG.selectAll('.domain').remove();
    
    yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', -30)
        .attr('x', -innerHeight / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);


        const xAxisG = g.append('g').call(xAxis)
      .attr('transform', `translate(0,${innerHeight})`);
    
    xAxisG.select('.domain').remove();
    
    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 50)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabel);
    
    const lineGenerator = d3.line()
      .x(d => xScale(xValue(d)))
      .y(d => yScale(yValue(d)))
      .curve(d3.curveBasis);
    
    const lastYValue = d =>
      yValue(d.values[d.values.length - 1]);
    
    const nested = d3.nest()
      .key(colorValue)
      .entries(data)
      .sort((a, b) =>
        d3.descending(lastYValue(a), lastYValue(b))
      );
    
   
    
    colorScale.domain(nested.map(d => d.key));
    
    g.selectAll('.line-path').data(nested)
      .enter().append('path')
        .attr('class', 'line-path')
        .attr('d', d => lineGenerator(d.values))
        .attr('stroke', d => colorScale(d.key))
        .style('opacity', lineOpacity)
        .on("mouseover", function(d, i) {
          
          svg.append("text")
            .attr("class", "title-text")
            .style("fill", "white")        
            .text(d.key)
            .attr("text-anchor", "middle")
            .attr("x", (innerWidth )/2 )
            .attr("y", 40);
        })
      .on("mouseout", function(d) {
          svg.select(".title-text").remove();
        });
   
        

        //add circles to the graph


    }

  }
 componentDidUpdate(){
   this.renderGraph()

   };
  render(){
    return(
      <div className='row'>
        <div className="col-10">
             <svg height={this.state.height} width={this.state.width} id="linegraph"></svg>
        </div>
         <div className="graph-buttons col-2">
             <button type= "submit"   id="rainGraph" className="btn btns rain-btn ">Rainfall</button>
             <button type='submit'  id="tempGraph" className="btn btns  temp-btn">Temperature</button> 
            
         </div>
      </div>
    )

    
  }
}



class Graph extends React.Component { 
  
  render() {
  var Data = this.props.currentData && Object.keys(this.props.currentData).map((key, index) => {
    var symbol ;
    if(key.includes('Avg')){
      symbol = "Temperature"
    }
    if(key.includes("rain")){
      symbol = "Rainfall"
    }
    return  {month : key , value: this.props.currentData[key], symbol : symbol};

  })

  if(typeof(Data) !== "undefined"){
    var graphData = Data.filter(e => {
      return e.symbol !== undefined;
    })
    //console.log(graphData)
    var tempData = Data.filter(e => {
      return e.month.includes("Avg")
    })
    var rainData = Data.filter(e => {
      return e.month.includes("rain")
    })
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var parseTime = d3.timeParse("%B");
    tempData.forEach((e, i) => {
      e.month = months[i];
      e.value = +e.value;
      e.month = parseTime(e.month)
    }) 
    rainData.forEach((e,i) => {
      e.month = months[i];
      e.value = +e.value;
      e.month = parseTime(e.month)
    })
  }
 
        return (
            <div>
                  <Multiple  data={graphData}/>
              </div>
          )
      }
}


class GraphContainer extends React.Component {
  state = {
    currentData: [],
    currentYear: 2010,
    selectedCountry: "Australia",
    countryOptions: [],
    rainData : [],
    selectedAttribute: "Rainfall"
  };

  handleChange = (e) => {
     
     this.setState({
       [e.target.id] : e.target.value
     })

     d3.csv(
      `https://raw.githubusercontent.com/maru25-alt/data/master/year${this.state.currentYear}.csv`
    ).then((data) => {
      let countryOptions = []
      let currentData = data.filter((e) => {
        if (e.country === this.state.selectedCountry) {
          return e;
        }
      });
      data.map(e => {
        countryOptions.push(e.country)
      })
      //  console.log(currentData)
      this.setState({
        currentData: currentData,
        countryOptions,
      });
    });

    Promise.all([
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2010.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2011.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2012.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2013.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2014.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2015.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2016.csv'),
    
  ]).then(([year2010, year2011, year2012, year2013, year2014, year2015, year2016]) => {

    var TempData = this.tempData(year2010, year2011, year2012, year2013, year2014, year2015, year2016)
   
    var  RainData = this.rainData(year2010, year2011, year2012, year2013, year2014, year2015, year2016)
    var options = {
      country: this.state.selectedCountry,
      attribute: this.state.selectedAttribute
    }
    if(this.state.selectedAttribute=== "Rainfall"){
      renderSimpleMultiple(RainData,  "chart1" , options) ; 
    }
    else if(this.state.selectedAttribute === "Temperature"){
      renderSimpleMultiple(TempData,  "chart1" , options)   
    }
    else{
      return 0;
    }

      
  })
}

tempData = (year2010, year2011, year2012, year2013, year2014, year2015, year2016) => {

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
  var parseTime = d3.timeParse("%B");

  var data2010 = year2010.filter((e) => {
    if (e.country === this.state.selectedCountry){
      return e;
    }
  });
 let data =  Object.keys(data2010[0]).map((key, index) => {
   var year = 2010
   return {month: key, year: year, value: data2010[0][key]}
  })
        var tempData2010 =   data.filter(e => {
          return  e.month.includes("Avg")
         })

         tempData2010.forEach((e,i)=> {
          e.month =  (e.month.replace("_Avg_temp", ""))
          e.month = months[i]
         e.month = parseTime(e.month)
      });

      var data2011 = year2011.filter((e) => {
        if (e.country === this.state.selectedCountry){
          return e;
        }
      });
  
      let Data2011 =  Object.keys(data2011[0]).map((key, index) => {
        var year = 2011
        return {month: key, year: year, value: data2011[0][key]}
       })
  
       var  tempData2011 = Data2011.filter(e => {
        return e.month.includes("Avg")
      })
  
        tempData2011.forEach((e,i)=> {
          e.month =  (e.month.replace("_Avg_temp", ""))
          e.month = months[i]
        e.month = parseTime(e.month)
        
      })


      var data2012 = year2012.filter((e) => {
        if (e.country === this.state.selectedCountry){
          return e;
        }
      });
  
      let Data2012 =  Object.keys(data2012[0]).map((key, index) => {
        var year = 2012
        return {month: key, year: year, value: data2012[0][key]}
       })
  
       var tempData2012 = Data2012.filter(e => {
        return e.month.includes("Avg")
        
      })
  
     tempData2012.forEach((e,i)=> {
          e.month =  (e.month.replace("_Avg_temp", ""))
          e.month = months[i]
        e.month = parseTime(e.month)
      })

      var data2013 = year2013.filter((e) => {
        if (e.country === this.state.selectedCountry){
          return e;
        }
      });
  
      let Data2013 =  Object.keys(data2013[0]).map((key, index) => {
        var year = 2013
        return {month: key, year: year, value: data2013[0][key]}
       })
  
       var tempData2013 = Data2013.filter(e => {
        return e.month.includes("Avg")
        
      })
  
     tempData2013.forEach((e,i)=> {
          e.month =  (e.month.replace("_Avg_temp", ""))
          e.month = months[i]
        e.month = parseTime(e.month)
      })


      var data2014 = year2014.filter((e) => {
        if (e.country === this.state.selectedCountry){
          return e;
        }
      });
  
      let Data2014 =  Object.keys(data2014[0]).map((key, index) => {
        var year = 2014
        return {month: key, year: year, value: data2014[0][key]}
       })
  
  
       var tempData2014 = Data2014.filter(e => {
        return e.month.includes("Avg")
      })
  
     tempData2014.forEach((e,i)=> {
          e.month =  (e.month.replace("_Avg_temp", ""))
          e.month = months[i]
        e.month = parseTime(e.month)
      })


      var data2015 = year2015.filter((e) => {
        if (e.country === this.state.selectedCountry){
          return e;
        }
      });
  
      let Data2015=  Object.keys(data2015[0]).map((key, index) => {
        var year = 2015
        return {month: key, year: year, value: data2015[0][key]}
       });
  
       var tempData2015 = Data2015.filter(e => {
        return e.month.includes("Avg")
      })
  
     tempData2015.forEach((e,i)=> {
          e.month =  (e.month.replace("_Avg_temp", ""))
          e.month = months[i]
        e.month = parseTime(e.month)
      })

      var data2016 = year2016.filter((e) => {
        if (e.country === this.state.selectedCountry){
          return e;
        }
      });
  
      let Data2016 =  Object.keys(data2016[0]).map((key, index) => {
        var year = 2016
        return {month: key, year: year, value: data2016[0][key]}
       })
  
       var tempData2016 = Data2016.filter(e => {
        return e.month.includes("Avg")
      })
  
     tempData2016.forEach((e,i)=> {
          e.month =  (e.month.replace("_Avg_temp", ""))
          e.month = months[i]
        e.month = parseTime(e.month)
      })
  

      var tempData = [];
      tempData = tempData.concat(tempData2010, tempData2011,tempData2012,tempData2013, tempData2014, tempData2015)
  
    tempData2015.forEach(e => {
      e.value = +e.value
    })
  return tempData
}


rainData = (year2010, year2011, year2012, year2013, year2014, year2015, year2016) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
  var parseTime = d3.timeParse("%B");


  var TempData = this.tempData(year2010, year2011, year2012, year2013, year2014, year2015, year2016)
  console.log(TempData)


  var data2010 = year2010.filter((e) => {
   if (e.country === this.state.selectedCountry){
     return e;
   }
 });
let data =  Object.keys(data2010[0]).map((key, index) => {
  var year = 2010
  return {month: key, year: year, value: data2010[0][key]}
 })
 
   var rainData2010 = data.filter(e => {
     return e.month.includes("rain")
   })

  rainData2010.forEach((e,i)=> {
       e.month =  (e.month.replace("_rain", ""))
       e.month = months[i]
       e.month = parseTime(e.month)
   })
 


var data2011 = year2011.filter((e) => {
 if (e.country === this.state.selectedCountry){
   return e;
 }
});

let Data2011 =  Object.keys(data2011[0]).map((key, index) => {
 var year = 2011
 return {month: key, year: year, value: data2011[0][key]}
})

var  rainData2011 = Data2011.filter(e => {
 return e.month.includes("rain")
})

 rainData2011.forEach((e,i)=> {
   e.month =  (e.month.replace("_rain", ""))
   e.month = months[i]
 e.month = parseTime(e.month)
})

var data2012 = year2012.filter((e) => {
 if (e.country === this.state.selectedCountry){
   return e;
 }
});

let Data2012 =  Object.keys(data2012[0]).map((key, index) => {
 var year = 2012
 return {month: key, year: year, value: data2012[0][key]}
})

var rainData2012 = Data2012.filter(e => {
 return e.month.includes("rain")
 
})

rainData2012.forEach((e,i)=> {
   e.month =  (e.month.replace("_rain", ""))
   e.month = months[i]
 e.month = parseTime(e.month)
})

var data2013 = year2013.filter((e) => {
 if (e.country === this.state.selectedCountry){
   return e;
 }
});

let Data2013 =  Object.keys(data2013[0]).map((key, index) => {
 var year = 2013
 return {month: key, year: year, value: data2013[0][key]}
})

var rainData2013 = Data2013.filter(e => {
 return e.month.includes("rain")
 
})

rainData2013.forEach((e,i)=> {
   e.month =  (e.month.replace("_rain", ""))
   e.month = months[i]
 e.month = parseTime(e.month)
})


var data2014 = year2014.filter((e) => {
 if (e.country === this.state.selectedCountry){
   return e;
 }
});

let Data2014 =  Object.keys(data2014[0]).map((key, index) => {
 var year = 2014
 return {month: key, year: year, value: data2014[0][key]}
})


var rainData2014 = Data2014.filter(e => {
 return e.month.includes("rain")
})

rainData2014.forEach((e,i)=> {
   e.month =  (e.month.replace("_rain", ""))
   e.month = months[i]
 e.month = parseTime(e.month)
})

var data2015 = year2015.filter((e) => {
 if (e.country === this.state.selectedCountry){
   return e;
 }
});

let Data2015=  Object.keys(data2015[0]).map((key, index) => {
 var year = 2015
 return {month: key, year: year, value: data2015[0][key]}
});

var rainData2015 = Data2015.filter(e => {
 return e.month.includes("rain")
})

rainData2015.forEach((e,i)=> {
   e.month =  (e.month.replace("_rain", ""))
   e.month = months[i]
 e.month = parseTime(e.month)
})

var data2016 = year2016.filter((e) => {
 if (e.country === this.state.selectedCountry){
   return e;
 }
});

let Data2016 =  Object.keys(data2016[0]).map((key, index) => {
 var year = 2016
 return {month: key, year: year, value: data2016[0][key]}
})

var rainData2016 = Data2016.filter(e => {
 return e.month.includes("rain")
})

rainData2016.forEach((e,i)=> {
   e.month =  (e.month.replace("_rain", ""))
   e.month = months[i]
 e.month = parseTime(e.month)
})


var rainData = [];
rainData = rainData.concat(  rainData2010,rainData2011, rainData2012,rainData2013, rainData2014, rainData2015, rainData2016)

rainData.forEach((e,i) => {
  e.value = +e.value
})

return rainData
}

  handleChangeAttributes = (e) => {

    var value = e.target.value
    this.setState({
      selectedAttribute: e.target.value
    })

    Promise.all([
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2010.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2011.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2012.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2013.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2014.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2015.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2016.csv'),
    
  ]).then(([year2010, year2011, year2012, year2013, year2014, year2015, year2016]) => {

    var TempData = this.tempData(year2010, year2011, year2012, year2013, year2014, year2015, year2016)
    //console.log(TempData)
   var  RainData = this.rainData(year2010, year2011, year2012, year2013, year2014, year2015, year2016)
    var options = {
      country: this.state.selectedCountry,
      attribute: value
    }
    if(value === "Rainfall"){
      renderSimpleMultiple(RainData,  "chart1" , options) ; 
    }
    else if(value === "Temperature"){
      renderSimpleMultiple(TempData,  "chart1" , options)   
    }
    else{
      return 0;
    }
     
  })
}

  componentWillMount() {
    d3.csv(
      `https://raw.githubusercontent.com/maru25-alt/data/master/year2010.csv`
    ).then((data) => {
      let countryOptions = []
      let currentData = data.filter((e) => {
        if (e.country === this.state.selectedCountry) {
          return e;
        }
      });
      data.map(e => {
        countryOptions.push(e.country)
      })
      this.setState({
        currentData: currentData,
        countryOptions,
      });
    });

    Promise.all([
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2010.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2011.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2012.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2013.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2014.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2015.csv'),
      d3.csv('https://raw.githubusercontent.com/maru25-alt/data/master/year2016.csv'),
    
  ]).then(([year2010, year2011, year2012, year2013, year2014, year2015, year2016]) => {

        var TempData = this.rainData(year2010, year2011, year2012, year2013, year2014, year2015, year2016)
       console.log(TempData)


        var options = {
          country: this.state.selectedCountry,
          attribute: "Rainfall"
        }
    
    renderSimpleMultiple(TempData,  "chart1" , options) 
   
     
  })
}

  render() {
    let options = this.state.countryOptions.map((e) => {
      return (
          <option value={e} key={e}>{e}</option>
      )
    })
    return (
      <div>
         <div className="nav_date row">
            <div >
               Selected Country :
                <select onChange={this.handleChange} className="custom-select my-1 mr-sm-2" id="selectedCountry">
                  {options}
                </select>

            </div>
             <div className="degrees">
                 Current Year: 
                <select onChange={this.handleChange} className="custom-select my-1 mr-sm-2" id="currentYear">
                    <option defaultValue value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                  </select>
                </div>

        </div>
        <div className="home">
            <Table currentData={this.state.currentData} />
            <Graph currentData={this.state.currentData[0]}/>
        </div>
        <div className="row">
        <svg id="chart1"></svg>
        <div className="buttons_container">
          <div className="form-check form-check-inline input-btn">
            <input className="form-check-input " type="radio" name="inlineRadioOptions" onClick={this.handleChangeAttributes}  id="inlineRadio1" value="Rainfall" defaultChecked />
            <label className="form-check-label" htmlFor="inlineRadio1">Rainfall</label>
        </div>
        <div className="form-check form-check-inline input-btn">
           <input className="form-check-input " type="radio" name="inlineRadioOptions" onClick={this.handleChangeAttributes} id="inlineRadio2" value="Temperature"/>
          <label className="form-check-label" htmlFor="inlineRadio2">Temperature</label>
        </div>
    </div>
      </div>
        </div>
    );
  }
}

function App() {
  return (
    <div >
      <GraphContainer />
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
