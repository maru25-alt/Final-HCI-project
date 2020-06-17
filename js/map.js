const rootElement = document.getElementById("root");

class Switches extends React.Component {
  handleCheck = (e) => {
    this.props.handleChild(e.target.value);
  };

  handleCheckyear = (e) => {
    this.props.handleChildYear(e.target.value);
    
  };
  handleCheckMonth = (e) => {
    this.props.handleChildMonth(e.target.value);
  };

  render() {
    let months = [
      "January",
      "February",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let options = months.map((e, i) => {
      return (
        <option value={e} key={i}>
          {e}
        </option>
      );
    });
    return (
    
  <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header headings " id="headingOne">
      <h2 className="mb-0">
        <button className="btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         Weather Attributes
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
                  <div className="row form-group ">
                    <label className="col-sm-6 col-form-label">Temperature</label>
                    <div className="col-sm-6 onoffswitch ">
                      <input
                        type="radio"
                        onClick={this.handleCheck}
                        name="onoffswitch"
                        className=" onoffswitch-checkbox"
                        id="myonoffswitch1"
                        value="temperature"
                      />
                      <label
                        className="onoffswitch-label"
                        htmlFor ="myonoffswitch1"
                      >
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                      </label>
                    </div>
                  </div>
                  <div className="row form-group ">
                    <label className="col-sm-6 ">Rainfall</label>
                    <div className="col-sm-6 onoffswitch ">
                      <input
                        type="radio"
                        onClick={this.handleCheck}
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="myonoffswitch2"
                        value="rainfall"
                      />
                      <label
                        className="onoffswitch-label"
                        htmlFor="myonoffswitch2"
                      >
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                      </label>
                    </div>
                  </div>

                  <div className="row form-group ">
                    <label className="col-sm-6 ">All</label>
                    <div className="col-sm-6 onoffswitch ">
                      <input
                        type="radio"
                        onClick={this.handleCheck}
                        name="onoffswitch"
                        className="onoffswitch-checkbox"
                        id="myonoffswitch3"
                        value="all"
                      />
                      <label
                        className="onoffswitch-label"
                        htmlFor="myonoffswitch3"
                      >
                        <span className="onoffswitch-inner"></span>
                        <span className="onoffswitch-switch"></span>
                      </label>
                    </div>
                  </div>

                 
              
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header headings" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Select Current Month
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      <div className="form-group row">
            <label className="col-sm-6 col-form-label">Month</label>
            <div className="col-sm-6">
               <select className="form-control"  onChange={this.handleCheckMonth}>{options}</select>
            </div>
           
          </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header headings" id="headingThree">
      <h2 className="mb-0">
        <button className="btn  collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         Select Current Year
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      <div className="form-check">
        <input className="form-check-input" 
         type="radio" 
         name="exampleRadios"
         id="exampleRadios1"
         value="2010" 
         defaultChecked
         onChange={this.handleCheckyear}
        />
        <label className="form-check-label"  htmlFor ="exampleRadios1">
          2010
         </label>
           
      </div>
      <div className="form-check">
        <input className="form-check-input" 
        type="radio"
        name="exampleRadios" 
        id="exampleRadios2" 
        onChange={this.handleCheckyear}
        value="2011"/>
        <label className="form-check-label"  htmlFor ="exampleRadios2">
         2011
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" 
        type="radio"
        name="exampleRadios" 
        id="exampleRadios3" 
        onChange={this.handleCheckyear}
        value="2012"/>
        <label className="form-check-label"  htmlFor ="exampleRadios3">
         2012
        </label>
      </div>


      <div className="form-check">
        <input className="form-check-input" 
        type="radio"
        name="exampleRadios" 
        id="exampleRadios4" 
        onChange={this.handleCheckyear}
        value="2013"/>
        <label className="form-check-label"  htmlFor ="exampleRadios4">
         2013
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" 
        type="radio"
        name="exampleRadios" 
        id="exampleRadios5" 
        onChange={this.handleCheckyear}
        value="2014"/>
        <label className="form-check-label"  htmlFor ="exampleRadios5">
         2014
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" 
        type="radio"
        name="exampleRadios" 
        id="exampleRadios6" 
        onChange={this.handleCheckyear}
        value="2015"/>
        <label className="form-check-label"  htmlFor ="exampleRadios6">
         2015
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" 
        type="radio"
        name="exampleRadios" 
        id="exampleRadios7" 
        onChange={this.handleCheckyear}
        value="2016"/>
        <label className="form-check-label"  htmlFor ="exampleRadios7">
         2016
        </label>
      </div>

            
           
         
      </div>
    </div>
  </div>
</div>

       
        
     
    );
  }
}

class Map extends React.Component {
  state = {
    height: 500,
    width: 920,
    countries: {},
    states: {},
    margin: {
      top: 50,
      botton: 50,
      left: 50,
      rigth: 50,
    },
    selectedValue: "",
    selectedYear: 2010,
    selectedMonth: "January",
  };

  zoomIn() {
    console.log("clicked");
  }

  componentWillReceiveProps(next) {
   
    if (next !== this.props) {
     // console.log(next);
      this.setState({
        selectedValue: next.selectedValue,
        selectedMonth: next.selectedMonth,
        selectedYear: next.selectedYear,
      });
    }
    let currentYear = (next.selectedYear);

    Promise.all([
      d3.json("https://unpkg.com/world-atlas@1.1.4/world/50m.json"),
      d3.csv(
        `https://raw.githubusercontent.com/maru25-alt/data/master/year${currentYear}.csv`
      ),
    ]).then((data) => {
      let states = data[1];
      let countries = topojson.feature(data[0], data[0].objects.countries)
        .features;
      this.setState({
        states: states,
        countries: countries,
      });

      this.renderMap(states, countries, next.selectedValue);
    });

    //this.renderMap(this.state.states, this.state.countries, next.selectedValue);
  }
  renderMap = (data, countries, selectedValue) => {
    const svg = d3.select("svg");


    svg.selectAll("*").remove();
    const g = svg
      .append("g")
      .append("g")
      .attr(
        "transform",
        `translate( ${this.state.margin.left}, ${this.state.margin.rigth})`
      );

    var projection = d3.geoMercator(); ///.traslate([this.width / 2, this.height / 2]);
    projection.scale(150);
    const path = d3.geoPath().projection(projection);

    g.selectAll(".country")
      .data(countries)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", path)
      .on("mouseover", function (d) {
        d3.select(this).classed("selected", true);
      })
      .on("mouseout", function (d) {
        d3.select(this).classed("selected", false);
      });

    g.selectAll(".city-circle")
      .attr("class", "city-circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 2)
      .attr("cx", function (d) {
        var coords = projection([d.longitude, d.latitude]);
        return coords[0];
      })
      .attr("cy", function (d) {
        var coords = projection([d.longitude, d.latitude]);
        return coords[1];
      });
    svg.call(
      d3.zoom().on("zoom", () => {
        g.attr("transform", d3.event.transform);
      })
    );

    function zoomed() {
      g.attr("transform", d3.event.transform);
    }

    let zoom = d3.zoom().on("zoom", zoomed);
    //svg.call(this.zoomFunc)
    d3.select("#zoom-in").on("click", function () {
      console.log("clicked");
      zoom.scaleBy(svg.transition().duration(750), 1.2);
    });

    d3.select("#zoom-out").on("click", function () {
      console.log("zoom out");
      zoom.scaleBy(svg.transition().duration(750), 0.8);
    });

    d3.select("#reset").on("click", function () {
      zoom.scale(1);
    });

    g.selectAll("country-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "country-label")
      .attr("x", function (d) {
        var coords = projection([d.longitude, d.latitude]);
        // console.log(coords);
        return coords[0];
      })
      .attr("y", function (d) {
        var coords = projection([d.longitude, d.latitude]);
        return coords[1];
      })
      .text(function (d) {
        return d.country;
      });

    let month = this.state.selectedMonth

    const format = d3.format(".2s");
    data.forEach(e => {
      e[`${month}_rain`] = format(e[`${month}_rain`]);
      e[`${month}_Avg_temp`]= format(e[`${month}_Avg_temp`])
      
    });

    g.selectAll("temperature-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", d => {
          return  "temperature-label";
      })
      .attr("x", function (d) {
        var coords = projection([d.longitude, d.latitude]);
        return coords[0];
      })
      .attr("y", function (d) {
        var coords = projection([d.longitude, d.latitude]);
        return coords[1];
      })
      .text(function (d) {
        if (selectedValue === "rainfall") {
          return  d[`${month}_rain`] +"mm";
        }
        else if (selectedValue === "temperature") {
          return  d[`${month}_Avg_temp`] + "°C";
        }
        else if(selectedValue === "all"){
          return d[`${month}_rain`] +"mm"+ " " + "/" + " "+
           d[`${month}_Avg_temp`] + "°C" ;

        } else {
          return null;
        }
      });
  };



 
  componentWillMount() {
    let currentYear = (this.state.selectedYear);

    Promise.all([
      d3.json("https://unpkg.com/world-atlas@1.1.4/world/50m.json"),
      d3.csv(
        `https://raw.githubusercontent.com/maru25-alt/data/master/year${currentYear}.csv`
      ),
    ]).then((data) => {
      let states = data[1];
      let countries = topojson.feature(data[0], data[0].objects.countries)
        .features;
      this.setState({
        states: states,
        countries: countries,
      });

      this.renderMap(states, countries, this.state.selectedValue);
    });

  }

  render() {
    return (
      <div className="map-container">
        <div
          className="btn-group-vertical"
          role="group"
          aria-label="..."
          id="float-button-group"
        >
          <button
            onClick={this.zoomIn}
            type="button"
            className="btn btn-default"
            id="zoom-in"
          >
            <i className="fas fa-search-plus"></i>
          </button>
          <button type="button" className="btn btn-default" id="zoom-out">
            <i className="fas fa-search-minus"></i>
          </button>
          <button type="button" className="btn btn-default" id="reset">
            <i className="fas fa-redo-alt"></i>
          </button>
        </div>
        <svg
          className="map-container"
          width={this.state.width}
          height={this.state.height}
        ></svg>
      </div>
    );
  }
}

////////////////////////////////////////
class MapContainer extends React.Component {
  state = {
    selectedAttribute: "",
    selectedYear: 2010,
    selectedMonth: "January",
  };

  handleChild = (e) => {

    this.setState({
      selectedAttribute: e,
    });
  };

  handleChildYear = (e) => {

    this.setState({
      selectedYear: e,
    });
  };

  handleChildMonth = (e) => {

    this.setState({
      selectedMonth: e,
    });
  };

  render() {
   
    return (
      <div className="row">
        <div className="col-sm-3">
          <Switches
            handleChild={this.handleChild}
            handleChildMonth={this.handleChildMonth}
            handleChildYear={this.handleChildYear}
          />
        </div>
        <div className="col-sm-9">
          <Map
            selectedValue={this.state.selectedAttribute}
            selectedMonth={this.state.selectedMonth}
            selectedYear={this.state.selectedYear}
          />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MapContainer />
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
