POSITION = 0;
SEGUNDOS = 240;
SEGUNDOS_RESTANTES = 241;
var now = new Date(d3.time.year.floor(new Date()));

var spacetime = d3.select('body');
var width = 1024,
    height = 600,
    radius = Math.min(width, height);

var radii = {
    "sun": radius / 8,
    "earthOrbit": radius / 2.5,
    "earth": radius / 32,
    //"moonOrbit": radius / 16,
    //"moon": radius / 96
};

// Space
var svg = spacetime.append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// Sun

// Earth's orbit
svg.append("circle")
    .attr("class", "earthOrbit")
    .attr("r", radii.earthOrbit)
    .style("fill", "none")
    .style("stroke", "rgba(255,255, 255, 255)")
    .style('stroke-width', 3);

// Current position of Earth in its orbit
var earthOrbitPosition = d3.svg.arc()
    .outerRadius(radii.earthOrbit + 1)
    .innerRadius(radii.earthOrbit - 1)
    .startAngle(0)
    .endAngle(0);
svg.append("path")
    .attr("class", "earthOrbitPosition")
    .attr("d", earthOrbitPosition)
    .style('stroke', 'black')
    .style('stroke-width', 2)
    .style("fill", "rgba(5, 5, 5, 0.75)");

// Earth
svg.append("circle")
    .attr("class", "earth")
    .attr("r", radii.earth)
    .attr("transform", "translate(0," + -radii.earthOrbit + ")")
    .style("fill", "none")
    .style('stroke', "white")
    .style('stroke-width', 5);


svg.append("line")
                    .attr("x1", 0)
                    .attr("y1", - radii.earthOrbit -10 )
                    .attr("x2", 0)
                    .attr("y2", - radii.earthOrbit -20)
                    .style('stroke', "white")
                    .style('stroke-width', 3);
// Counter
svg.append("text")
    .attr("class", "counter")
    .attr("transform", "translate(0,35)")
    .style("fill", "white")
    .style("font-size", "128px")
    .style("font-family", "sans-serif")
    .style("text-anchor", "middle")
    .style("font-weight", "bold")
    .text("SPACE APPS");

svg.append("text")
    .attr("class", "legend")
    .style("fill", "white")
    .style("font-size", "34px")
    .style("font-family", "sans-serif")
    .style("text-anchor", "middle")
    .style("font-weight", "bold")
    .text("SPACE APPS")
    .attr("transform", "translate( 0, 85)");;


svg.append("text")
    .attr("class", "legend-top")
    .style("fill", "red")
    .style("font-size", "34px")
    .style("font-family", "sans-serif")
    .style("text-anchor", "middle")
    .style("font-weight", "bold")
    .text("INTERNATIONAL")
    .attr("transform", "translate( 0, -80)");


svg.append("text")
    .attr("class", "legend-top")
    .style("fill", "red")
    .style("font-size", "24px")
    .style("font-family", "sans-serif")
    .style("text-anchor", "middle")
    .style("font-weight", "bold")
    .text("CHALLENGE")
    .attr("transform", "translate( 0, 130)");

// Moon's orbit
svg.append("circle")
    .attr("class", "moonOrbit")
    .attr("r", radii.moonOrbit)
    .attr("transform", "translate(0," + -radii.earthOrbit + ")")
    .style("fill", "none")
    .style("stroke", "rgba(113, 170, 255, 0.25)");

// Current position of the Moon in its orbit
var moonOrbitPosition = d3.svg.arc()
    .outerRadius(radii.moonOrbit + 1)
    .innerRadius(radii.moonOrbit - 1)
    .startAngle(0)
    .endAngle(0);
svg.append("path")
    .attr("class", "moonOrbitPosition")
    .attr("d", moonOrbitPosition(now))
    .attr("transform", "translate(0," + -radii.earthOrbit + ")")
    .style("fill", "rgba(113, 170, 255, 0.75)");

// Moon
svg.append("circle")
    .attr("class", "moon")
    .attr("r", radii.moon)
    .attr("transform", "translate(0," + (-radii.earthOrbit + -radii.moonOrbit) + ")")
    .style("fill", "rgba(150, 150, 150, 1.0)");

// Update the clock every second

clock = setInterval(function() {
    now = new Date();
    POSITION += 2 / SEGUNDOS;
    SEGUNDOS_RESTANTES -= 1;
    minutes = Math.floor(SEGUNDOS_RESTANTES / 60);
    seconds = SEGUNDOS_RESTANTES - (minutes * 60);
    var interpolateEarthOrbitPosition = d3.interpolate(earthOrbitPosition.endAngle()(), (POSITION * Math.PI));

    //    var interpolateDay = d3.interpolate(day.endAngle()(), (2 * Math.PI * d3.time.seconds(d3.time.day.floor(now), now).length / d3.time.seconds(d3.time.day.floor(now), d3.time.day.ceil(now)).length));

    //    var interpolateMoonOrbitPosition = d3.interpolate(moonOrbitPosition.endAngle()(), (2 * Math.PI * d3.time.hours(d3.time.month.floor(now), now).length / d3.time.hours(d3.time.month.floor(now), d3.time.month.ceil(now)).length));

    d3.transition().tween("orbit", function() {
        return function(t) {
            // Animate Earth orbit position
            d3.select(".earthOrbitPosition").attr("d", earthOrbitPosition.endAngle(interpolateEarthOrbitPosition(t)));

            // Transition Earth
            d3.select(".earth")
                .attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")");
            if (SEGUNDOS_RESTANTES >= 0)
                if (seconds > 9)
                    d3.select(".counter").text(minutes + ":" + seconds);
                else
                    d3.select(".counter").text(minutes + ":0" + seconds);
            else {
                d3.select(".counter").style("font-size","70px");
                d3.select(".earthOrbitPosition").style("stroke", "rgba(255,255, 255, 255)")
                d3.select(".counter").attr("transform","translate(0,15 )")
                d3.select(".counter").text("SPACE APPS");
                d3.select(".legend").text("CHALLENGE");
            }
            // Transition day
            // d3.select(".day")
            //   .attr("d", day.endAngle(interpolateDay(t)))
            // .attr("transform", "translate(" + radii.earthOrbit * Math.sin(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + "," + -radii.earthOrbit * Math.cos(interpolateEarthOrbitPosition(t) - earthOrbitPosition.startAngle()()) + ")");

        };
    });
}, 1000);