import { AxisLeft, AxisBottom } from "@visx/axis";
import { curveLinear } from "@visx/curve";
import { Grid } from "@visx/grid";
import { Group } from "@visx/group";
import { cityTemperature } from "@visx/mock-data";
import { scaleLinear, scaleTime } from "@visx/scale";
import { LinePath } from "@visx/shape";

import {
  COLORS,
  MARGINS,
  PLOT_DIMENSIONS,
  PLOT_INNER_DIMENSIONS,
  AXIS_LABEL_PROPS,
  CITY_COLORS,
} from "../shared/constants";
import { CityTemperature, CityColors, City } from "../shared/types";

type LinePlotProps = { primaryCity: City };

export const LinePlot = ({ primaryCity }: LinePlotProps) => {
  // X SCALE SETUP
  const xMin = new Date("2011-10-01").valueOf();
  const xMax = new Date("2012-09-30").valueOf();
  const xScale = scaleTime({
    domain: [xMin, xMax],
    range: [0, PLOT_INNER_DIMENSIONS.width],
  });

  // Y SCALE SETUP
  const yMin = 10;
  const yMax = 100;
  const yScale = scaleLinear({
    domain: [yMin, yMax],
    range: [PLOT_INNER_DIMENSIONS.height, 0],
  });

  return (
    <>
      <svg width={PLOT_DIMENSIONS.width} height={PLOT_DIMENSIONS.height}>
        <rect
          x={0}
          y={0}
          width={PLOT_DIMENSIONS.width}
          height={PLOT_DIMENSIONS.height}
          fill={COLORS.white}
        />
        <Group left={MARGINS.left} top={MARGINS.top}>
          <Grid
            xScale={xScale}
            yScale={yScale}
            width={PLOT_INNER_DIMENSIONS.width}
            height={PLOT_INNER_DIMENSIONS.height}
            stroke={COLORS.lightGray}
          />
          <AxisBottom
            scale={xScale}
            top={PLOT_INNER_DIMENSIONS.height}
            labelProps={AXIS_LABEL_PROPS}
            stroke={COLORS.black}
            tickStroke={COLORS.black}
          />
          <AxisLeft
            scale={yScale}
            label="Temp (F)"
            labelProps={AXIS_LABEL_PROPS}
            labelOffset={20}
            stroke={COLORS.black}
            tickStroke={COLORS.black}
          />
          {(Object.keys(CITY_COLORS) as Array<keyof CityColors>).map((city) => (
            <LinePath<CityTemperature>
              key={`${city}`}
              curve={curveLinear}
              data={cityTemperature}
              x={(datum) => xScale(new Date(datum.date).valueOf())}
              y={(datum) => yScale(Number(datum[city]))}
              stroke={city === primaryCity ? CITY_COLORS[city] : COLORS.gray}
              strokeWidth={2}
              strokeOpacity={city === primaryCity ? 1 : 0.7}
              shapeRendering="geometricPrecision"
            />
          ))}
        </Group>
      </svg>
    </>
  );
};

export default LinePlot;
