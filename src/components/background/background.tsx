import { useEffect, useRef } from "react";

export const SvgBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const refreshDuration = 20000; // Animation duration
  let refreshTimeout: NodeJS.Timeout;
  let numPointsX: number;
  let numPointsY: number;
  let unitWidth: number;
  let unitHeight: number;
  let points: Array<{
    x: number;
    y: number;
    originX: number;
    originY: number;
  }> = [];

  const onLoad = () => {
    const svg = svgRef.current;
    if (!svg) return;

    svg.setAttribute("width", window.innerWidth.toString());
    svg.setAttribute("height", window.innerHeight.toString());

    const unitSize = (window.innerWidth + window.innerHeight) / 4; // Number of poligons here
    numPointsX = Math.ceil(window.innerWidth / unitSize) + 1;
    numPointsY = Math.ceil(window.innerHeight / unitSize) + 1;
    unitWidth = Math.ceil(window.innerWidth / (numPointsX - 1));
    unitHeight = Math.ceil(window.innerHeight / (numPointsY - 1));

    points = [];

    for (let y = 0; y < numPointsY; y++) {
      for (let x = 0; x < numPointsX; x++) {
        points.push({
          x: unitWidth * x,
          y: unitHeight * y,
          originX: unitWidth * x,
          originY: unitHeight * y,
        });
      }
    }

    randomizePoints();

    points.forEach((point, i) => {
      if (
        point.originX !== unitWidth * (numPointsX - 1) &&
        point.originY !== unitHeight * (numPointsY - 1)
      ) {
        createPolygons(svg, i);
      }
    });

    // Start the animation immediately
    refresh();
  };

  const randomizePoints = () => {
    points.forEach((point) => {
      if (
        point.originX !== 0 &&
        point.originX !== unitWidth * (numPointsX - 1)
      ) {
        point.x = point.originX + Math.random() * unitWidth - unitWidth / 2;
      }
      if (
        point.originY !== 0 &&
        point.originY !== unitHeight * (numPointsY - 1)
      ) {
        point.y = point.originY + Math.random() * unitHeight - unitHeight / 2;
      }
    });
  };

  interface CustomSVGPolygonElement extends SVGPolygonElement {
    point1: number;
    point2: number;
    point3: number;
  }

  const refresh = () => {
    randomizePoints();
    if (!svgRef.current) return;

    const svg = svgRef.current;
    svg.childNodes.forEach((polygonNode) => {
      const polygon = polygonNode as CustomSVGPolygonElement;
      const animate = polygon.childNodes[0] as SVGAnimateElement;

      if (animate.getAttribute("to")) {
        animate.setAttribute("from", animate.getAttribute("to")!);
      }

      animate.setAttribute(
        "to",
        `${points[polygon.point1].x},${points[polygon.point1].y} ` +
          `${points[polygon.point2].x},${points[polygon.point2].y} ` +
          `${points[polygon.point3].x},${points[polygon.point3].y}`
      );

      animate.beginElement();
    });

    refreshTimeout = setTimeout(refresh, refreshDuration);
  };

  const createPolygons = (svg: SVGSVGElement, i: number) => {
    const topLeftX = points[i].x;
    const topLeftY = points[i].y;
    const topRightX = points[i + 1].x;
    const topRightY = points[i + 1].y;
    const bottomLeftX = points[i + numPointsX].x;
    const bottomLeftY = points[i + numPointsX].y;
    const bottomRightX = points[i + numPointsX + 1].x;
    const bottomRightY = points[i + numPointsX + 1].y;

    const rando = Math.floor(Math.random() * 2);

    for (let n = 0; n < 2; n++) {
      const polygon = document.createElementNS(
        svg.namespaceURI,
        "polygon"
      ) as CustomSVGPolygonElement;

      if (rando === 0) {
        if (n === 0) {
          polygon.point1 = i;
          polygon.point2 = i + numPointsX;
          polygon.point3 = i + numPointsX + 1;
          polygon.setAttribute(
            "points",
            `${topLeftX},${topLeftY} ${bottomLeftX},${bottomLeftY} ${bottomRightX},${bottomRightY}`
          );
        } else if (n === 1) {
          polygon.point1 = i;
          polygon.point2 = i + 1;
          polygon.point3 = i + numPointsX + 1;
          polygon.setAttribute(
            "points",
            `${topLeftX},${topLeftY} ${topRightX},${topRightY} ${bottomRightX},${bottomRightY}`
          );
        }
      } else if (rando === 1) {
        if (n === 0) {
          polygon.point1 = i;
          polygon.point2 = i + numPointsX;
          polygon.point3 = i + 1;
          polygon.setAttribute(
            "points",
            `${topLeftX},${topLeftY} ${bottomLeftX},${bottomLeftY} ${topRightX},${topRightY}`
          );
        } else if (n === 1) {
          polygon.point1 = i + numPointsX;
          polygon.point2 = i + 1;
          polygon.point3 = i + numPointsX + 1;
          polygon.setAttribute(
            "points",
            `${bottomLeftX},${bottomLeftY} ${topRightX},${topRightY} ${bottomRightX},${bottomRightY}`
          );
        }
      }

      polygon.setAttribute("fill", `rgba(0,0,0,${Math.random() / 20})`); // Light color here
      polygon.setAttribute("stroke", `rgba(150,150,150,${Math.random() / 1})`); // Dark color here
      polygon.setAttribute("stroke-width", "0.20"); // Thinner poligon lines here

      const animate = document.createElementNS(svg.namespaceURI, "animate");
      animate.setAttribute("fill", "freeze");
      animate.setAttribute("attributeName", "points");
      animate.setAttribute("dur", `${refreshDuration}ms`);
      animate.setAttribute("calcMode", "linear");

      polygon.appendChild(animate);
      svg.appendChild(polygon);
    }
  };

  useEffect(() => {
    onLoad();

    const handleResize = () => {
      if (svgRef.current) {
        while (svgRef.current.firstChild) {
          svgRef.current.removeChild(svgRef.current.firstChild);
        }
      }
      clearTimeout(refreshTimeout);
      onLoad();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(refreshTimeout);
    };
  }, []);

  useEffect(() => {
    document.body.offsetHeight;
    refresh();
  }, []);

  return <svg ref={svgRef} id="bg"></svg>;
};
