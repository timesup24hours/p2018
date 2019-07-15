import React from 'react';
import { max, scaleBand, scaleLinear, select, axisBottom } from 'd3';

import styles from './index.module.css';
import Bar from './Bar';

export default class D3ChartBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'A', value: 4 },
        { name: 'B', value: 8 },
        { name: 'C', value: 15 },
        { name: 'D', value: 16 },
        { name: 'E', value: 23 },
        { name: 'F', value: 42 }
      ],
      margin: { top: 20, right: 20, bottom: 40, left: 40 },
      chartHeight: 0,
      chartWith: 0,
      maxVal: 0,
      scale: { x: undefined, y: undefined }
    };
  }

  x = (data, width) =>
    scaleBand()
      .padding(0.1)
      // scaleBand domain should be an array of specific values
      // in our case, we want to use ...
      .domain(data.map(d => d.name))
      .range([0, width]);

  y = (height, maxVal) =>
    scaleLinear()
      // scaleLinear domain required at least two values, min and max
      .domain([0, maxVal])
      .range([height, 0])
      .nice();

  getDimensions = () => {
    let containerRefCSS;
    if (this.wrapperRef) {
      containerRefCSS = this.wrapperRef.getBoundingClientRect();
    } else {
      containerRefCSS = document
        .getElementsByClassName(styles.wrapper)[0]
        .getBoundingClientRect();
    }
    let chartHeight = parseInt(containerRefCSS.height, 10);
    let chartWith = parseInt(containerRefCSS.width, 10);

    return {
      chartHeight,
      chartWith
    };
  };

  updateDimensions = () => {
    const { data, margin } = this.state;
    const { chartHeight, chartWith } = this.getDimensions();

    // get the max value from the data
    var maxVal = max(data, function(d) {
      return d.value;
    });

    let x = this.x(data, chartWith);
    let y = this.y(chartHeight, maxVal);

    this.setState({ chartHeight, chartWith, maxVal, scale: { x, y } });

    // define the height and width of the chart
    let chart = select(this.svgRef)
      .attr('height', chartHeight + margin.top + margin.bottom)
      .attr('width', chartWith + margin.left + margin.right);

    // remove the previous x line when resize in order to redraw
    if (chart.select('.axis')['_groups'][0][0]) {
      chart.select('.axis').remove();
    }

    // create x line cross the botton of the chart with value
    chart
      .append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0,${chartHeight + 5})`)
      .call(axisBottom(x));
  };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions);
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    clearTimeout(this.timeout);
  }

  handleOnClick = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    const { data } = this.state;
    const newData = data.map((d, index) => {
      if (index === i) {
        return {
          ...d,
          value: ++d.value
        };
      } else {
        return d;
      }
    });
    this.setState({ data: newData });
    this.updateDimensions();
  };

  render() {
    const { data, chartHeight, maxVal, scale } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.wrapper} ref={ref => (this.wrapperRef = ref)}>
          <svg className={styles.chart} ref={ref => (this.svgRef = ref)}>
            {chartHeight ? (
              <Bar
                data={data}
                height={chartHeight}
                maxVal={maxVal}
                scale={scale}
                handleOnClick={this.handleOnClick}
              />
            ) : null}
          </svg>
        </div>
        <div className={styles.desc}>
          interacted D3.js chart (click the above bars)
        </div>
      </div>
    );
  }
}
