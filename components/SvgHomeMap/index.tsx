import React from "react";
import Svg, {
  SvgProps,
  Path,
  G,
  Text,
  Polyline,
  Line,
  Rect,
} from "react-native-svg";

import { colors } from "../styles/mainStyles";
import { categories } from "../data/homeMapCategories";
import { useFavourites } from "../../hooks/useFavourites";
import { useCategoryFilter } from "../hooks/useCategoryFilter";

interface SVGRProps {
  pressAction: (id: string) => void;
  selected: string;
  categorySelected: string[];
  currentCategory?: string;
}

function SvgComponent({
  pressAction,
  selected,
  categorySelected,
  currentCategory,
  ...props
}: SvgProps & SVGRProps) {
  const bgColor = colors.mapBlue;
  const puebloColor = colors.brown;
  const puebloBorder = colors.brownDark;
  const { getFavsID, isFavID } = useFavourites();
  const favorites = getFavsID();
  const { selectedCategory } = useCategoryFilter({ getFavsID });

  const fillColor = (id: string) => {
    if (currentCategory === "favoritos" && categorySelected.includes(id)) {
      return categories[1].backgroundColor;
    } else if (currentCategory === "favoritos") {
      return bgColor;
    }
    if (!categorySelected || categorySelected.length === 0) {
      return puebloColor;
    } else {
      const category = categorySelected[0]?.slice(0, 1);
      const idSelected = id.slice(0, 1);
      if (category === idSelected) {
        const filtered = categories.filter(
          (e) => e.id.slice(0, 1) === idSelected
        );
        const color =
          filtered.length > 0 ? filtered[0].backgroundColor : bgColor;
        return color;
      } else {
        return bgColor;
      }
    }
  };

  const strokeColor = (id: string) => {
    if (currentCategory === "favoritos" && categorySelected.includes(id)) {
      return categories[1].color;
    } else if (currentCategory === "favoritos") {
      return bgColor;
    }
    if (!categorySelected || categorySelected.length === 0) {
      return puebloBorder;
    } else {
      const category = categorySelected[0]?.slice(0, 1);
      const idSelected = id.slice(0, 1);
      if (category === idSelected) {
        const filtered = categories.filter(
          (e) => e.id.slice(0, 1) === idSelected
        );
        const color = filtered.length > 0 ? filtered[0].color : bgColor;
        return color;
      } else {
        return bgColor;
      }
    }
  };

  return (
    <Svg id="prefix__Capa_1" viewBox="0 0 529.8 542.8" {...props}>
      {/* PAREDES */}
      <Polyline
        fill="none"
        stroke="#F7F7F7"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
        points="110.9,86.5 110.9,86.5 110.9,487.5 208.5,487.5 208.5,86.5 	"
      />
      <Polyline
        fill="none"
        stroke="#F7F7F7"
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
        points="306,86.5 306,86.5 306,487.5 403.6,487.5 403.6,86.5 	"
      />
      <Line
        fill="none"
        stroke="#F7F7F7"
        strokeWidth={7}
        x1="379.4"
        y1="86.5"
        x2="105.2"
        y2="86.5"
      />
      <Line
        fill="none"
        stroke="#F7F7F7"
        strokeWidth={7}
        x1="379.4"
        y1="86.5"
        x2="105.2"
        y2="86.5"
      />

      <G onPress={() => pressAction("a5")}>
        <G>
          {/* ATRACCIONES 5 CARRUSEL */}
          <Path
            fill={fillColor("a5")}
            stroke={strokeColor("a5")}
            strokeWidth={2}
            d="M262.3,322.2c11.3-2.6,18.3-13.9,15.6-25.2c-2.6-11.3-13.9-18.3-25.2-15.6s-18.3,13.9-15.6,25.2
            C239.7,317.9,251,325,262.3,322.2z"
          />
        </G>
      </G>
      {/* ATRACCIONES 4 PATINAJE */}
      <Path
        fill={fillColor("a4")}
        stroke={strokeColor("a4")}
        strokeWidth={2}
        d="M279.6,237.8h-44.5c-1.2,0-2.1-1.2-2.1-2.7V112.4c0-1.5,1-2.7,2.1-2.7h44.5c1.2,0,2.1,1.2,2.1,2.7V235
        C281.9,236.5,280.9,237.8,279.6,237.8z"
        onPress={() => pressAction("a4")}
      />
      <G>
        {/* ATRACCIONES 6 TREN */}
        <Path
          fill={fillColor("a6")}
          stroke={strokeColor("a6")}
          strokeWidth={2}
          d="M257.5,483.1L257.5,483.1c-19.2,0-34.8-15.6-34.8-34.8v-62.2c0-19.2,15.6-34.8,34.8-34.8l0,0c19.2,0,34.8,15.6,34.8,34.8v62.2C292.3,467.6,276.7,483.1,257.5,483.1z"
          onPress={() => pressAction("a6")}
        />
      </G>
      {/* ATRACCIONES 7 VR */}
      <G>
        <G>
          <Path
            fill={fillColor("a7")}
            stroke={strokeColor("a7")}
            strokeWidth={2}
            d="M363.1,167.6H349c-1.1,0-1.9,0.8-1.9,1.9v14.2c0,1.1,0.8,1.9,1.9,1.9h14.1c1.1,0,1.9-0.8,1.9-1.9v-14.2
				C365,168.4,364.1,167.6,363.1,167.6z"
            onPress={() => pressAction("a7")}
          />
        </G>
      </G>
      <G>
        {/* ESPECTACULOS 6 TEATRO */}
        <G>
          <Path
            fill={"#AFD2DB"}
            d="M176.4,450.4h10.4c1.4,0,2.5,1.1,2.5,2.5v4.5c0,1.4-1.1,2.5-2.5,2.5h-10.4c-1.4,0-2.5-1.1-2.5-2.5v-4.5
				C173.9,451.6,175.1,450.4,176.4,450.4z"
            onPress={() => pressAction("e6")}
          />
        </G>
        <G>
          <G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M139.4,400.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C140.2,400.8,139.7,400.4,139.4,400.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M146.2,400.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C147,400.8,146.6,400.4,146.2,400.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M153,400.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C153.8,400.8,153.4,400.4,153,400.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M159.7,400.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C160.6,400.8,160.3,400.4,159.7,400.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M166.5,400.4H165c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C167.4,400.8,166.9,400.4,166.5,400.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M173.3,400.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C174.1,400.8,173.7,400.4,173.3,400.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M180.1,400.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C180.9,400.8,180.6,400.4,180.1,400.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M186.8,400.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C187.7,400.8,187.3,400.4,186.8,400.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M139.4,406.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C140.2,407,139.7,406.6,139.4,406.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M146.2,406.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C147,407,146.6,406.6,146.2,406.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M153,406.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C153.8,407,153.4,406.6,153,406.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M159.7,406.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C160.6,407,160.3,406.6,159.7,406.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M166.5,406.6H165c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C167.4,407,166.9,406.6,166.5,406.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M173.3,406.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C174.1,407,173.7,406.6,173.3,406.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M180.1,406.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C180.9,407,180.6,406.6,180.1,406.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M186.8,406.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C187.7,407,187.3,406.6,186.8,406.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M139.4,412.8h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C140.2,413.2,139.7,412.8,139.4,412.8z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M146.2,412.8h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C147,413.2,146.6,412.8,146.2,412.8z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M153,412.8h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C153.8,413.2,153.4,412.8,153,412.8z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M159.7,412.8h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C160.6,413.2,160.3,412.8,159.7,412.8z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M166.5,412.8H165c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C167.4,413.2,166.9,412.8,166.5,412.8z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M173.3,412.8h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C174.1,413.2,173.7,412.8,173.3,412.8z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M180.1,412.8h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C180.9,413.2,180.6,412.8,180.1,412.8z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M186.8,412.8h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C187.7,413.2,187.3,412.8,186.8,412.8z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M139.4,419.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C140.2,419.5,139.7,419.1,139.4,419.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M146.2,419.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C147,419.5,146.6,419.1,146.2,419.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M153,419.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C153.8,419.5,153.4,419.1,153,419.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M159.7,419.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C160.6,419.5,160.3,419.1,159.7,419.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M166.5,419.1H165c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C167.4,419.5,166.9,419.1,166.5,419.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M173.3,419.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C174.1,419.5,173.7,419.1,173.3,419.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M180.1,419.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C180.9,419.5,180.6,419.1,180.1,419.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M186.8,419.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C187.7,419.5,187.3,419.1,186.8,419.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M139.4,425.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C140.2,425.5,139.7,425.1,139.4,425.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M146.2,425.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C147,425.5,146.6,425.1,146.2,425.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M153,425.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C153.8,425.5,153.4,425.1,153,425.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M159.7,425.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C160.6,425.5,160.3,425.1,159.7,425.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M166.5,425.1H165c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C167.4,425.5,166.9,425.1,166.5,425.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M173.3,425.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C174.1,425.5,173.7,425.1,173.3,425.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M180.1,425.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C180.9,425.5,180.6,425.1,180.1,425.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M186.8,425.1h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C187.7,425.5,187.3,425.1,186.8,425.1z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M139.4,431.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C140.2,431.8,139.7,431.4,139.4,431.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M146.2,431.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C147,431.8,146.6,431.4,146.2,431.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M153,431.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C153.8,431.8,153.4,431.4,153,431.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M159.7,431.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C160.6,431.8,160.3,431.4,159.7,431.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M166.5,431.4H165c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C167.4,431.8,166.9,431.4,166.5,431.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M173.3,431.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C174.1,431.8,173.7,431.4,173.3,431.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M180.1,431.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C180.9,431.8,180.6,431.4,180.1,431.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M186.8,431.4h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C187.7,431.8,187.3,431.4,186.8,431.4z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M139.4,437.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C140.2,438,139.7,437.6,139.4,437.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M146.2,437.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C147,438,146.6,437.6,146.2,437.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M153,437.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C153.8,438,153.4,437.6,153,437.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M159.7,437.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C160.6,438,160.3,437.6,159.7,437.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M166.5,437.6H165c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C167.4,438,166.9,437.6,166.5,437.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M173.3,437.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C174.1,438,173.7,437.6,173.3,437.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M180.1,437.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C180.9,438,180.6,437.6,180.1,437.6z"
              />
            </G>
            <G>
              <Path
                fill={"#AFD2DB"}
                d="M186.8,437.6h-1.5c-0.5,0-0.8,0.3-0.8,0.8v1.7c0,0.5,0.3,0.8,0.8,0.8h1.5c0.5,0,0.8-0.3,0.8-0.8v-1.7
						C187.7,438,187.3,437.6,186.8,437.6z"
              />
            </G>
          </G>
          <G>
            <G>
              {/* ESPECTACULOS 6 TEATRO ESCENARIO */}
              <Path
                fill={fillColor("e6")}
                stroke={strokeColor("e6")}
                strokeWidth={2}
                d="M194.7,358.6c0-2.1-1.7-3.9-3.9-3.9h-57.9c-2.1,0-3.9,1.7-3.9,3.9v27.3c0,2.1,1.7,3.9,3.9,3.9h57.9c2.1,0,3.9-1.7,3.9-3.9V358.6z"
                onPress={() => pressAction("e6")}
              />
            </G>
          </G>
        </G>
      </G>
      {/* ESPECTACULOS 5 PAPA NOEL / REYES MAGOS */}
      <G>
        <G>
          <Path
            fill={fillColor("e5")}
            stroke={strokeColor("e5")}
            strokeWidth={2}
            d="M150.8,341.8h23.3c1,0,1.9,0.8,1.9,1.9v3.4c0,1-0.8,1.9-1.9,1.9h-23.3c-1,0-1.9-0.8-1.9-1.9v-3.4
            C149,342.6,149.8,341.8,150.8,341.8z"
            onPress={() => pressAction("e5")}
          />
        </G>
      </G>
      {/* <!-- ESPECTÁCULOS 1 BELÉN GIGANTE--> */}
      <G>
        <G>
          <G>
            <Path
              fill={fillColor("e1")}
              stroke={strokeColor("e1")}
              strokeWidth={2}
              d="M169.4,116.7h-14.6c-1.6,0-2.9,1.3-2.9,2.9v56.3c0,1.6,1.3,2.9,2.9,2.9h14.8c1.6,0,2.9-1.3,2.9-2.9v-56.3
                C172.4,118,171,116.7,169.4,116.7z"
              onPress={() => pressAction("e1")}
            />
          </G>
        </G>
      </G>

      {/* <!-- CIRCULO 2 ESPECTACULOS BOLA NAVIDAD SEAT --> */}
      <G>
        <G>
          <Path
            fill={fillColor("e2")}
            stroke={strokeColor("e2")}
            strokeWidth={2}
            d="M356,145.4c2.7,0,5.3-0.7,7.6-2.4c2.2-1.5,4-3.6,5.1-6.1c1-2.4,1.3-5.2,0.7-7.9s-1.9-5.1-3.7-7
				c-1.9-1.9-4.3-3.3-7-3.7c-2.7-0.6-5.3-0.3-7.9,0.7c-2.4,1-4.6,2.8-6.1,5.1c-1.5,2.2-2.4,4.9-2.4,7.6c0,3.6,1.3,7.1,4,9.7
				C348.9,143.9,352.3,145.4,356,145.4z"
            onPress={() => pressAction("e2")}
          />
        </G>
      </G>
      {/* <!-- CÍRCULO 8 ATRACCIONES PHOTOPOINT --> */}
      <G>
        <G>
          <Path
            fill={fillColor("a8")}
            stroke={strokeColor("a8")}
            strokeWidth={2}
            d="M356,227.9c2.1,0,4.2-0.6,6-1.9c1.8-1.2,3.2-2.8,4-4.8s1.1-4.1,0.6-6.2c-0.5-2.1-1.5-4-2.9-5.5
				c-1.5-1.5-3.4-2.6-5.5-2.9c-2.1-0.5-4.2-0.2-6.2,0.6c-1.9,0.8-3.6,2.2-4.8,4c-1.2,1.8-1.9,3.9-1.9,6c0,2.8,1.1,5.6,3.2,7.6
				C350.4,226.7,353.1,227.9,356,227.9z"
            onPress={() => pressAction("a8")}
          />
        </G>
      </G>
      {/* <!-- CÍRCULO 7 ESPECTACULOS MÚSICA EN VIVO --> */}
      <G>
        <G>
          <Path
            fill={fillColor("e7")}
            stroke={strokeColor("e7")}
            strokeWidth={2}
            d="M355.5,388.2c1.7,0,3.5-0.5,4.9-1.5s2.6-2.3,3.3-3.9c0.7-1.6,0.9-3.4,0.5-5.1s-1.2-3.3-2.4-4.5
				c-1.2-1.2-2.8-2.1-4.5-2.4c-1.7-0.4-3.5-0.2-5.1,0.5c-1.5,0.7-3,1.8-3.9,3.3c-1,1.4-1.5,3.2-1.5,4.9c0,2.3,0.9,4.6,2.6,6.2
				C350.9,387.2,353.1,388.2,355.5,388.2z"
            onPress={() => pressAction("e7")}
          />
        </G>
      </G>
      {/* <!-- CÍRCULO 3 ESPECTACULOS ARBOL NAVIDAD LUZ --> */}
      <G>
        <G>
          <Path
            fill={fillColor("e3")}
            stroke={strokeColor("e3")}
            strokeWidth={2}
            d="M258,74.1c1.7,0,3.4-0.5,4.8-1.5s2.5-2.3,3.2-3.9c0.7-1.5,0.8-3.3,0.5-5c-0.4-1.7-1.2-3.2-2.4-4.4
				c-1.2-1.2-2.7-2.1-4.4-2.4c-1.7-0.4-3.4-0.2-5,0.5c-1.5,0.7-2.9,1.8-3.9,3.2c-0.9,1.4-1.5,3.1-1.5,4.8c0,1.1,0.2,2.3,0.7,3.3
				s1.1,2,1.9,2.8c0.8,0.8,1.8,1.5,2.8,1.9C255.7,73.9,256.9,74.1,258,74.1z"
            onPress={() => pressAction("e3")}
          />
        </G>
      </G>
      {/* <!-- ESPECTACULOS CIRCULO 4 BUZÓN MÁGICO --> */}
      <G>
        <G>
          <Path
            fill={fillColor("e4")}
            stroke={strokeColor("e4")}
            strokeWidth={2}
            d="M162.7,312.9c2.7,0,5.5-0.8,7.7-2.4c2.3-1.7,4.1-3.6,5.2-6.2c1.1-2.4,1.4-5.3,0.8-8c-0.6-2.7-2-5.2-3.8-7.1
				c-2-2-4.4-3.3-7.1-3.8c-2.7-0.6-5.5-0.3-8,0.8c-2.4,1.1-4.7,2.9-6.2,5.2c-1.5,2.3-2.4,5-2.4,7.7c0,1.8,0.3,3.6,1.1,5.3
				c0.8,1.7,1.8,3.2,3,4.6c1.4,1.4,2.9,2.4,4.6,3C159.1,312.5,160.9,312.9,162.7,312.9z"
            onPress={() => pressAction("e4")}
          />
        </G>
      </G>
      {/* <!-- ATRACCIONES 3 TOBOGÁN HIELO SINTÉTICO --> */}
      <G onPress={() => pressAction("a3")}>
        <Path
          fill={fillColor("a3")}
          stroke={strokeColor("a3")}
          strokeWidth={2}
          d="M95.1,477.2H69.8c-1.3,0-2.4-1-2.4-2.4V346.6c0-1.3,1-2.4,2.4-2.4h25.3c1.3,0,2.4,1,2.4,2.4v128.3
			C97.6,476.2,96.4,477.2,95.1,477.2z"
        />
        <Path
          fill="none"
          stroke={strokeColor("a3")}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M95.1,477.2H69.8c-1.3,0-2.4-1-2.4-2.4V346.6c0-1.3,1-2.4,2.4-2.4h25.3c1.3,0,2.4,1,2.4,2.4v128.3
			C97.6,476.2,96.4,477.2,95.1,477.2z"
        />
      </G>
      {/* <!-- ATRACCIONES 9 SALAS INSTAGRAM --> */}
      <G onPress={() => pressAction("a9")}>
        <Path
          fill={fillColor("a9")}
          stroke={strokeColor("a9")}
          strokeWidth={2}
          d="M445.2,111.8h-25.7c-0.6,0-1,0.5-1,1v32v2.5v85.9c0,0.6,0.5,1,1,1h14c0.6,0,1-0.5,1-1v-84.9c0-0.6,0.5-1,1-1
			h9.5c0.6,0,1-0.5,1-1v-33.4C446.2,112.3,445.7,111.8,445.2,111.8z"
        />
        <Path
          fill="none"
          stroke={strokeColor("a9")}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M445.2,111.8h-25.7c-0.6,0-1,0.5-1,1v32v2.5v85.9c0,0.6,0.5,1,1,1h14c0.6,0,1-0.5,1-1v-84.9c0-0.6,0.5-1,1-1
			h9.5c0.6,0,1-0.5,1-1v-33.4C446.2,112.3,445.7,111.8,445.2,111.8z"
        />
      </G>

      {/* *************** CATEGORÍA GOURMET ***************** */}

      <G>
        <G>
          {/* <!-- GOURMET 1 CERVEZA PAULANER--> */}
          <G onPress={() => pressAction("g1")}>
            <Path
              fill={fillColor("g1")}
              stroke={strokeColor("g1")}
              strokeWidth={2}
              d="M328.6,254.3h7.8c1,0,1.9,0.8,1.9,1.9v3.4c0,1-0.8,1.9-1.9,1.9h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4
				C326.7,255.2,327.6,254.3,328.6,254.3z"
            />
          </G>
          {/* <!-- GOURMET 2 AGUA SIERRA CAZORLA--> */}
          <G onPress={() => pressAction("g2")}>
            <Path
              fill={fillColor("g2")}
              stroke={strokeColor("g2")}
              strokeWidth={2}
              d="M340.8,254.3h7.8c1,0,1.9,0.8,1.9,1.9v3.4c0,1-0.8,1.9-1.9,1.9h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4
				C338.9,255.2,339.8,254.3,340.8,254.3z"
            />
          </G>
        </G>
        {/* <!-- GOURMET 3 VACÍO --> */}
        <G onPress={() => pressAction("g3")}>
          <Path
            fill={fillColor("g3")}
            stroke={strokeColor("g3")}
            strokeWidth={2}
            d="M363.4,254.3h7.8c1,0,1.9,0.8,1.9,1.9v3.4c0,1-0.8,1.9-1.9,1.9h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4
				C361.6,255.2,362.4,254.3,363.4,254.3z"
          />
        </G>
        {/* <!-- GOURMET 4 CERVEZA PAULANER --> */}
        <G onPress={() => pressAction("g4")}>
          <Path
            fill={fillColor("g4")}
            stroke={strokeColor("g4")}
            strokeWidth={2}
            d="M375.7,254.3h7.8c1,0,1.9,0.8,1.9,1.9v3.4c0,1-0.8,1.9-1.9,1.9h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4
				C373.8,255.2,374.6,254.3,375.7,254.3z"
          />
        </G>

        <G>
          {/* <!-- GOURMET 5 --> */}
          <G onPress={() => pressAction("g5")}>
            <Path
              fill={fillColor("g5")}
              stroke={strokeColor("g5")}
              strokeWidth={2}
              d="M423.6,308.6v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,306.6,423.6,307.5,423.6,308.6z"
            />
          </G>
          {/* <!-- GOURMET 6 --> */}
          <G onPress={() => pressAction("g6")}>
            <Path
              fill={fillColor("g6")}
              stroke={strokeColor("g6")}
              strokeWidth={2}
              d="M423.6,320.8v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,318.9,423.6,319.6,423.6,320.8z"
            />
          </G>
          {/* <!-- GOURMET 7 --> */}
          <G onPress={() => pressAction("g7")}>
            <Path
              fill={fillColor("g7")}
              stroke={strokeColor("g7")}
              strokeWidth={2}
              d="M423.6,332.6v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,330.6,423.6,331.6,423.6,332.6z"
            />
          </G>
          {/* <!-- GOURMET 8 --> */}
          <G onPress={() => pressAction("g8")}>
            <Path
              fill={fillColor("g8")}
              stroke={strokeColor("g8")}
              strokeWidth={2}
              d="M423.6,344.8v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,342.9,423.6,343.8,423.6,344.8z"
            />
          </G>
          {/* <!-- GOURMET 9 --> */}
          <G onPress={() => pressAction("g9")}>
            <Path
              fill={fillColor("g9")}
              stroke={strokeColor("g9")}
              strokeWidth={2}
              d="M423.6,357v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9V357c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,355.1,423.6,356,423.6,357z"
            />
          </G>
          {/* <!-- GOURMET 10 --> */}
          <G onPress={() => pressAction("g10")}>
            <Path
              fill={fillColor("g12")}
              stroke={strokeColor("g10")}
              strokeWidth={2}
              d="M423.6,369.1v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,367.2,423.6,368.1,423.6,369.1z"
            />
          </G>
          {/* <!-- GOURMET 11 --> */}
          <G onPress={() => pressAction("g11")}>
            <Path
              fill={fillColor("g11")}
              stroke={strokeColor("g11")}
              strokeWidth={2}
              d="M423.6,381.4v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,379.5,423.6,380.4,423.6,381.4z"
            />
          </G>
          {/* <!-- GOURMET 12 --> */}
          <G onPress={() => pressAction("g12")}>
            <Path
              fill={fillColor("g12")}
              stroke={strokeColor("g12")}
              strokeWidth={2}
              d="M423.6,393.6v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,391.8,423.6,392.6,423.6,393.6z"
            />
          </G>
          {/* <!-- GOURMET 13 --> */}
          <G onPress={() => pressAction("g13")}>
            <Path
              fill={fillColor("g13")}
              stroke={strokeColor("g13")}
              strokeWidth={2}
              d="M423.6,405.8v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,404,423.6,404.8,423.6,405.8z"
            />
          </G>
        </G>
        <G>
          {/* <!-- GOURMET 14 --> */}
          <G onPress={() => pressAction("g14")}>
            <Path
              fill={fillColor("g14")}
              stroke={strokeColor("g14")}
              strokeWidth={2}
              d="M423.6,432.1v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,430.1,423.6,431,423.6,432.1z"
            />
          </G>
          {/* <!-- GOURMET 15 --> */}
          <G onPress={() => pressAction("g15")}>
            <Path
              fill={fillColor("g15")}
              stroke={strokeColor("g15")}
              strokeWidth={2}
              d="M423.6,444.2v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,442.4,423.6,443.1,423.6,444.2z"
            />
          </G>
          {/* <!-- GOURMET 16 --> */}
          <G onPress={() => pressAction("g16")}>
            <Path
              fill={fillColor("g16")}
              stroke={strokeColor("g16")}
              strokeWidth={2}
              d="M423.6,456.1v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,454.1,423.6,455.1,423.6,456.1z"
            />
          </G>
          {/* <!-- GOURMET 17 --> */}
          <G onPress={() => pressAction("g17")}>
            <Path
              fill={fillColor("g17")}
              stroke={strokeColor("g17")}
              strokeWidth={2}
              d="M423.6,468.2v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C422.8,466.4,423.6,467.2,423.6,468.2z"
            />
          </G>
        </G>
        {/* <!-- GOURMET 18 --> */}
        <G onPress={() => pressAction("g18")}>
          <Path
            fill={fillColor("g18")}
            stroke={strokeColor("g18")}
            strokeWidth={2}
            d="M404.9,505.5h-13c-1,0-1.8-0.8-1.8-1.8v-3.3c0-1,0.8-1.8,1.8-1.8h13c1,0,1.8,0.8,1.8,1.8v3.3
			C406.7,504.6,405.9,505.5,404.9,505.5z"
          />
        </G>
        {/* <!-- GOURMET 19 --> */}
        <G onPress={() => pressAction("g19")}>
          <Path
            fill={fillColor("g19")}
            stroke={strokeColor("g19")}
            strokeWidth={2}
            d="M383.8,505.5h-13c-1,0-1.8-0.8-1.8-1.8v-3.3c0-1,0.8-1.8,1.8-1.8h13c1,0,1.8,0.8,1.8,1.8v3.3
			C385.7,504.6,384.8,505.5,383.8,505.5z"
          />
        </G>
        {/* <!-- GOURMET 20 --> */}
        <G onPress={() => pressAction("g20")}>
          <Path
            fill={fillColor("g20")}
            stroke={strokeColor("g20")}
            strokeWidth={2}
            d="M362.8,505.5h-13c-1,0-1.8-0.8-1.8-1.8v-3.3c0-1,0.8-1.8,1.8-1.8h13c1,0,1.8,0.8,1.8,1.8v3.3
			C364.6,504.6,363.8,505.5,362.8,505.5z"
          />
        </G>
        {/* <!-- GOURMET 21 --> */}
        <G onPress={() => pressAction("g21")}>
          <Path
            fill={fillColor("g21")}
            stroke={strokeColor("g21")}
            strokeWidth={2}
            d="M341.8,505.5h-13c-1,0-1.8-0.8-1.8-1.8v-3.3c0-1,0.8-1.8,1.8-1.8h13c1,0,1.8,0.8,1.8,1.8v3.3
			C343.6,504.6,342.8,505.5,341.8,505.5z"
          />
        </G>
        {/* <!-- GOURMET 22 --> */}
        <G onPress={() => pressAction("g22")}>
          <Path
            fill={fillColor("g22")}
            stroke={strokeColor("g22")}
            strokeWidth={2}
            d="M320.8,505.5h-13c-1,0-1.8-0.8-1.8-1.8v-3.3c0-1,0.8-1.8,1.8-1.8h13c1,0,1.8,0.8,1.8,1.8v3.3
			C322.6,504.6,321.8,505.5,320.8,505.5z"
          />
        </G>
      </G>

      {/* *************** CATEGORÍA COMPRAS ***************** */}

      <G>
        {/* <!-- COMPRAS 1 DECORACIÓN BAU --> */}
        <G onPress={() => pressAction("c1")}>
          <Path
            fill={fillColor("c1")}
            stroke={strokeColor("c1")}
            strokeWidth={2}
            d="M186.9,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C188.7,43.6,187.9,44.5,186.9,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 2 REGALOS WECO --> */}
        <G onPress={() => pressAction("c2")}>
          <Path
            fill={fillColor("c2")}
            stroke={strokeColor("c2")}
            strokeWidth={2}
            d="M199.1,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C200.9,43.6,200.1,44.5,199.1,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 3 --> */}
        <G onPress={() => pressAction("c3")}>
          <Path
            fill={fillColor("c3")}
            stroke={strokeColor("c3")}
            strokeWidth={2}
            d="M211.3,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C213.2,43.6,212.3,44.5,211.3,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 4 --> */}
        <G onPress={() => pressAction("c4")}>
          <Path
            fill={fillColor("c4")}
            stroke={strokeColor("c4")}
            strokeWidth={2}
            d="M223.1,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C225,43.6,224.2,44.5,223.1,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 5 CASETA JTW INFROMACIÓN --> */}
        <G onPress={() => pressAction("c5")}>
          <Path
            fill={fillColor("c5")}
            stroke={strokeColor("c5")}
            strokeWidth={2}
            d="M235.3,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C237.2,43.6,236.4,44.5,235.3,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 6 --> */}
        <G onPress={() => pressAction("c6")}>
          <Path
            fill={fillColor("c6")}
            stroke={strokeColor("c6")}
            strokeWidth={2}
            d="M287.4,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C289.3,43.6,288.5,44.5,287.4,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 7 --> */}
        <G onPress={() => pressAction("c7")}>
          <Path
            fill={fillColor("c7")}
            stroke={strokeColor("c7")}
            strokeWidth={2}
            d="M299.6,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C301.5,43.6,300.6,44.5,299.6,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 8 --> */}
        <G onPress={() => pressAction("c8")}>
          <Path
            fill={fillColor("c8")}
            stroke={strokeColor("c8")}
            strokeWidth={2}
            d="M311.8,44.5H304c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C313.7,43.6,312.9,44.5,311.8,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 9 --> */}
        <G onPress={() => pressAction("c9")}>
          <Path
            fill={fillColor("c9")}
            stroke={strokeColor("c9")}
            strokeWidth={2}
            d="M324,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C325.9,43.6,325.1,44.5,324,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 10 --> */}
        <G onPress={() => pressAction("c10")}>
          <Path
            fill={fillColor("c10")}
            stroke={strokeColor("c10")}
            strokeWidth={2}
            d="M336.2,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C338.1,43.6,337.3,44.5,336.2,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 11 --> */}
        <G onPress={() => pressAction("c11")}>
          <Path
            fill={fillColor("c11")}
            stroke={strokeColor("c11")}
            strokeWidth={2}
            d="M356.5,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C358.4,43.6,357.5,44.5,356.5,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 12 --> */}
        <G onPress={() => pressAction("c12")}>
          <Path
            fill={fillColor("c12")}
            stroke={strokeColor("c12")}
            strokeWidth={2}
            d="M368.7,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C370.6,43.6,369.7,44.5,368.7,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 13 --> */}
        <G onPress={() => pressAction("c13")}>
          <Path
            fill={fillColor("c13")}
            stroke={strokeColor("c13")}
            strokeWidth={2}
            d="M380.6,44.5h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C382.4,43.6,381.6,44.5,380.6,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 14 --> */}
        <G onPress={() => pressAction("c14")}>
          <Path
            fill={fillColor("c14")}
            stroke={strokeColor("c14")}
            strokeWidth={2}
            d="M392.8,44.5H385c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h7.8c1,0,1.9,0.8,1.9,1.9v3.4
			C394.6,43.6,393.8,44.5,392.8,44.5z"
          />
        </G>
        {/* <!-- COMPRAS 15 --> */}
        <G onPress={() => pressAction("c15")}>
          <Path
            fill={fillColor("c15")}
            stroke={strokeColor("c15")}
            strokeWidth={2}
            d="M406.8,41.5l5.5,5.5c0.7,0.7,0.7,1.9,0,2.7l-2.4,2.4c-0.7,0.7-1.9,0.7-2.7,0l-5.5-5.5c-0.7-0.7-0.7-1.9,0-2.7
			l2.4-2.4C404.9,40.7,406.1,40.7,406.8,41.5z"
          />
        </G>
        {/* <!-- COMPRAS 16 --> */}
        <G onPress={() => pressAction("c16")}>
          <Path
            fill={fillColor("c16")}
            stroke={strokeColor("c16")}
            strokeWidth={2}
            d="M415.4,50.1l5.5,5.5c0.7,0.7,0.7,1.9,0,2.7l-2.4,2.4c-0.7,0.7-1.9,0.7-2.7,0l-5.5-5.5c-0.7-0.7-0.7-1.9,0-2.7
			l2.4-2.4C413.5,49.4,414.7,49.4,415.4,50.1z"
          />
        </G>
        <G>
          {/* <!-- COMPRAS 17 --> */}
          <G onPress={() => pressAction("c17")}>
            <Path
              fill={fillColor("c17")}
              stroke={strokeColor("c17")}
              strokeWidth={2}
              d="M99,109.8v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,107.9,99,108.8,99,109.8z"
            />
          </G>
          {/* <!-- COMPRAS 18 --> */}
          <G onPress={() => pressAction("c18")}>
            <Path
              fill={fillColor("c18")}
              stroke={strokeColor("c18")}
              strokeWidth={2}
              d="M99,122v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9V122c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,120.2,99,121,99,122z"
            />
          </G>
          {/* <!-- COMPRAS 19 --> */}
          <G onPress={() => pressAction("c19")}>
            <Path
              fill={fillColor("c19")}
              stroke={strokeColor("c19")}
              strokeWidth={2}
              d="M99,133.9v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,132,99,132.8,99,133.9z"
            />
          </G>
          {/* <!-- COMPRAS 20 --> */}
          <G onPress={() => pressAction("c20")}>
            <Path
              fill={fillColor("c20")}
              stroke={strokeColor("c20")}
              strokeWidth={2}
              d="M99,146.1v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,144.2,99,145,99,146.1z"
            />
          </G>
          {/* <!-- COMPRAS 21 --> */}
          <G onPress={() => pressAction("c21")}>
            <Path
              fill={fillColor("c21")}
              stroke={strokeColor("c21")}
              strokeWidth={2}
              d="M99,158.3v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,156.4,99,157.3,99,158.3z"
            />
          </G>
          {/* <!-- COMPRAS 22 --> */}
          <G onPress={() => pressAction("c22")}>
            <Path
              fill={fillColor("c22")}
              stroke={strokeColor("c22")}
              strokeWidth={2}
              d="M99,170.5v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,168.6,99,169.5,99,170.5z"
            />
          </G>
          {/* <!-- COMPRAS 23 --> */}
          <G onPress={() => pressAction("c23")}>
            <Path
              fill={fillColor("c23")}
              stroke={strokeColor("c23")}
              strokeWidth={2}
              d="M99,182.7v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,180.8,99,181.7,99,182.7z"
            />
          </G>
          {/* <!-- COMPRAS 24 --> */}
          <G onPress={() => pressAction("c24")}>
            <Path
              fill={fillColor("c24")}
              stroke={strokeColor("c24")}
              strokeWidth={2}
              d="M99,194.9v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,193,99,193.9,99,194.9z"
            />
          </G>
          {/* <!-- COMPRAS 25 --> */}
          <G onPress={() => pressAction("c25")}>
            <Path
              fill={fillColor("c25")}
              stroke={strokeColor("c25")}
              strokeWidth={2}
              d="M99,207.1v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,205.2,99,206.1,99,207.1z"
            />
          </G>
          {/* <!-- COMPRAS 26 --> */}
          <G onPress={() => pressAction("c26")}>
            <Path
              fill={fillColor("c26")}
              stroke={strokeColor("c26")}
              strokeWidth={2}
              d="M99,219.3v7.8c0,1-0.8,1.9-1.9,1.9h-3.4c-1,0-1.9-0.8-1.9-1.9v-7.8c0-1,0.8-1.9,1.9-1.9h3.4
				C98.1,217.4,99,218.3,99,219.3z"
            />
          </G>
          {/* <!-- COMPRAS 27 --> */}
          <G onPress={() => pressAction("c27")}>
            <Path
              fill={fillColor("c27")}
              stroke={strokeColor("c27")}
              strokeWidth={2}
              d="M139.9,219.7h7.8c1,0,1.9,0.8,1.9,1.9v3.4c0,1-0.8,1.9-1.9,1.9h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4
				C138.1,220.5,138.9,219.7,139.9,219.7z"
            />
          </G>
          {/* <!-- COMPRAS 28 --> */}
          <G onPress={() => pressAction("c28")}>
            <Path
              fill={fillColor("c28")}
              stroke={strokeColor("c28")}
              strokeWidth={2}
              d="M152.1,219.7h7.8c1,0,1.9,0.8,1.9,1.9v3.4c0,1-0.8,1.9-1.9,1.9h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4
				C150.3,220.5,151.1,219.7,152.1,219.7z"
            />
          </G>
          {/* <!-- COMPRAS 29 --> */}
          <G onPress={() => pressAction("c29")}>
            <Path
              fill={fillColor("c29")}
              stroke={strokeColor("c29")}
              strokeWidth={2}
              d="M164.4,219.7h7.8c1,0,1.9,0.8,1.9,1.9v3.4c0,1-0.8,1.9-1.9,1.9h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4
				C162.5,220.5,163.3,219.7,164.4,219.7z"
            />
          </G>
          {/* <!-- COMPRAS 30 --> */}
          <G onPress={() => pressAction("c30")}>
            <Path
              fill={fillColor("c30")}
              stroke={strokeColor("c30")}
              strokeWidth={2}
              d="M176.6,219.7h7.8c1,0,1.9,0.8,1.9,1.9v3.4c0,1-0.8,1.9-1.9,1.9h-7.8c-1,0-1.9-0.8-1.9-1.9v-3.4
				C174.7,220.5,175.5,219.7,176.6,219.7z"
            />
          </G>
        </G>
      </G>
      {/* <!-- ATRACCIONES 1 ZONA INFORMACIÓN RECIBIDOR --> */}
      <G onPress={() => pressAction("a1")}>
        <Path
          fill={fillColor("a1")}
          stroke={strokeColor("a1")}
          strokeWidth={2}
          d="M270.4,44.5h-24.7c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h24.7c1,0,1.9,0.8,1.9,1.9v3.4
			C272.3,43.6,271.4,44.5,270.4,44.5z"
        />
        <Path
          fill={fillColor("a1")}
          stroke={strokeColor("a1")}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M270.4,44.5h-24.7c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h24.7c1,0,1.9,0.8,1.9,1.9v3.4
			C272.3,43.6,271.4,44.5,270.4,44.5z"
        />
      </G>
      {/* <!-- ATRACCIONES 2 ZONA INFANTIL --> */}
      <G>
        <G>
          <G>
            <G onPress={() => pressAction("a2")}>
              <Path
                fill={fillColor("a2")}
                stroke={strokeColor("a2")}
                strokeWidth={2}
                d="M187.5,240.8c0-1.6-1.3-2.9-3-2.9h-43.6c-1.6,0-3,1.3-3,2.9v20.6c0,1.6,1.3,2.9,3,2.9h43.6
						c1.6,0,3-1.3,3-2.9V240.8z"
              />
            </G>
          </G>
        </G>
      </G>
      {/* *************** CATEGORIA RINCON ***************** */}
      {/* <!-- RINCÓN 1 MENSAJEROS DE LA PAZ--> */}
      <G onPress={() => pressAction("r1")}>
        <Path
          fill={fillColor("r1")}
          stroke={strokeColor("r1")}
          strokeWidth={2}
          d="M107.3,42.2l-5.5,5.5c-0.7,0.7-0.7,1.9,0,2.7l2.4,2.4c0.7,0.7,1.9,0.7,2.7,0l5.5-5.5c0.7-0.7,0.7-1.9,0-2.7
			l-2.4-2.4C109.2,41.5,108,41.5,107.3,42.2z"
        />
      </G>
      {/* <!-- RINCÓN 2 CALENDARIO ADVIENTO SOLIDARIO --> */}
      <G onPress={() => pressAction("r2")}>
        <Path
          fill={fillColor("r2")}
          stroke={strokeColor("r2")}
          strokeWidth={2}
          d="M164.8,44.5h-44.4c-1,0-1.9-0.8-1.9-1.9v-3.4c0-1,0.8-1.9,1.9-1.9h44.4c1,0,1.9,0.8,1.9,1.9v3.4
			C166.7,43.6,165.9,44.5,164.8,44.5z"
        />
      </G>
      {/* *************** COLOR DOESN´T CHANGE ***************** */}
      {/* <!-- WC --> */}
      <G>
        <Rect fill={"#AFD2DB"} x="412.1" y="255.2" width="29.6" height="29.6" />
        <Rect fill="none" x="418.4" y="263.6" width="37" height="34.3" />
        <Text
          transform="matrix(1 0 0 1 420 275)"
          fill="#212121"
          fontFamily="AmaticSC_700Bold"
          fontSize={16}
        >
          WC
        </Text>
      </G>
      {/* <!-- TEXTS --> */}
      <Rect fill="none" x="16.5" y="81.5" width="50.6" height="13.7" />
      <Text
        transform="matrix(1 0 0 1 23 90)"
        fill="#212121"
        fontFamily="AmaticSC_700Bold"
        fontSize={16}
      >
        ENTRADA
      </Text>
      <Rect fill="none" x="462.7" y="81.5" width="50.6" height="13.7" />
      <Text
        transform="matrix(1 0 0 1 458.748 90)"
        fill="#212121"
        fontFamily="AmaticSC_700Bold"
        fontSize={16}
      >
        SALIDA
      </Text>
      {/* <!-- FLECHA ENTRADA --> */}
      <G>
        <G>
          <Path
            fill="#2C88BF"
            d="M71.6,86.5c0-0.7,0.6-1.4,1.4-1.4h26.8c0.7,0,1.4,0.6,1.4,1.4c0,0.7-0.6,1.4-1.4,1.4H72.9
				C72.2,87.9,71.6,87.3,71.6,86.5z"
          />
        </G>
        <G>
          <Path
            fill="#2C88BF"
            d="M93.6,80.6c0-0.3,0.1-0.7,0.4-1c0.5-0.5,1.4-0.5,1.9,0l6,6c0.3,0.3,0.4,0.6,0.4,1l0,0c0,0.4-0.1,0.7-0.4,1
				l-6,6c-0.5,0.5-1.4,0.5-1.9,0s-0.5-1.4,0-1.9l5-5l-5-5C93.7,81.3,93.6,80.9,93.6,80.6z"
          />
        </G>
      </G>
      {/* <!-- FLECHA SALIDA --> */}
      <G>
        <G>
          <Path
            fill="#2C88BF"
            d="M419.7,86.5c0-0.7,0.6-1.4,1.4-1.4H448c0.7,0,1.4,0.6,1.4,1.4c0,0.7-0.6,1.4-1.4,1.4h-26.9
				C420.3,87.9,419.7,87.3,419.7,86.5z"
          />
        </G>
        <G>
          <Path
            fill="#2C88BF"
            d="M441.7,80.6c0-0.3,0.1-0.7,0.4-1c0.5-0.5,1.4-0.5,1.9,0l6,6c0.3,0.3,0.4,0.6,0.4,1l0,0c0,0.4-0.1,0.7-0.4,1
				l-6,6c-0.5,0.5-1.4,0.5-1.9,0s-0.5-1.4,0-1.9l5-5l-5-5C441.8,81.3,441.7,80.9,441.7,80.6z"
          />
        </G>
      </G>

      <G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,409.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,409.6,324.5,409.6z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,409.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,409.6,324.5,409.6z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M336.3,409.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,409.6,337.1,409.6,336.3,409.6z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,409.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,409.6,337.1,409.6,336.3,409.6z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,423.2h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,423.2,324.5,423.2z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,423.2h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,423.2,324.5,423.2z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M336.3,423.2h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,423.2,337.1,423.2,336.3,423.2z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,423.2h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,423.2,337.1,423.2,336.3,423.2z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,436.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4V439
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,436.8,324.5,436.8z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,436.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4V439
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,436.8,324.5,436.8z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M336.3,436.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4V439
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,436.8,337.1,436.8,336.3,436.8z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,436.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4V439
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,436.8,337.1,436.8,336.3,436.8z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,450.2h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,450.2,324.5,450.2z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,450.2h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,450.2,324.5,450.2z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M336.3,450.2h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,450.2,337.1,450.2,336.3,450.2z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,450.2h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,450.2,337.1,450.2,336.3,450.2z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,463.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.5
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C325.6,463.8,325.2,463.8,324.5,463.8z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,463.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.5
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C325.6,463.8,325.2,463.8,324.5,463.8z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M336.3,463.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.5
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,463.8,337.1,463.8,336.3,463.8z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,463.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.5
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,463.8,337.1,463.8,336.3,463.8z"
          />
        </G>
        <Path fill="#AFD2DB" d="M378.2,409.6h-5.3v6.7h5.3V409.6z" />
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,409.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,409.6,388.7,409.6,388,409.6z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,409.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,409.6,388.7,409.6,388,409.6z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M364.3,421.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,421.4,365.1,421.4,364.3,421.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M364.3,421.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,421.4,365.1,421.4,364.3,421.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M364.3,409.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,409.4,365.1,409.4,364.3,409.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M364.3,409.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,409.4,365.1,409.4,364.3,409.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M349.8,421.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,421.4,350.6,421.4,349.8,421.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M349.8,421.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,421.4,350.6,421.4,349.8,421.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M349.8,409.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,409.4,350.6,409.4,349.8,409.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M349.8,409.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,409.4,350.6,409.4,349.8,409.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M364.3,465.1h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,465.1,365.1,465.1,364.3,465.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M364.3,465.1h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,465.1,365.1,465.1,364.3,465.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M364.3,452.1h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.4-0.6,0.7c-0.2,0.3-0.2,0.8-0.2,1.7v1.2c0,1,0,1.4,0.2,1.7
				c0.2,0.3,0.3,0.5,0.6,0.7c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.4,0.6-0.7c0.2-0.3,0.2-0.8,0.2-1.7v-1.2
				c0-1,0-1.4-0.2-1.7c-0.2-0.3-0.3-0.5-0.6-0.7C365.5,452.1,365.1,452.1,364.3,452.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M364.3,452.1h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.4-0.6,0.7c-0.2,0.3-0.2,0.8-0.2,1.7v1.2c0,1,0,1.4,0.2,1.7
				c0.2,0.3,0.3,0.5,0.6,0.7c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.4,0.6-0.7c0.2-0.3,0.2-0.8,0.2-1.7v-1.2
				c0-1,0-1.4-0.2-1.7c-0.2-0.3-0.3-0.5-0.6-0.7C365.5,452.1,365.1,452.1,364.3,452.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M349.8,465.1h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,465.1,350.6,465.1,349.8,465.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M349.8,465.1h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,465.1,350.6,465.1,349.8,465.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M349.8,453.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,453.4,350.6,453.4,349.8,453.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M349.8,453.4h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,453.4,350.6,453.4,349.8,453.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M376,423.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,423.1,376.8,423.1,376,423.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M376,423.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,423.1,376.8,423.1,376,423.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,423.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,423.1,388.7,423.1,388,423.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,423.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,423.1,388.7,423.1,388,423.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M376,436.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,436.9,376.8,436.9,376,436.9z"
          />
          <Path
            fill="#AFD2DB"
            d="M376,436.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,436.9,376.8,436.9,376,436.9z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,436.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,436.9,388.7,436.9,388,436.9z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,436.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,436.9,388.7,436.9,388,436.9z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M376,450.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,450.4,376.8,450.4,376,450.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M376,450.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,450.4,376.8,450.4,376,450.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,450.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,450.4,388.7,450.4,388,450.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,450.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,450.4,388.7,450.4,388,450.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M376,463.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.5
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,463.8,376.8,463.8,376,463.8z"
          />
          <Path
            fill="#AFD2DB"
            d="M376,463.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.5
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,463.8,376.8,463.8,376,463.8z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,463.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.5
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,463.8,388.7,463.8,388,463.8z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,463.8h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.5
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,463.8,388.7,463.8,388,463.8z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M355.5,445.4c1.1,0,2.2-0.3,3.2-1s1.7-1.5,2.1-2.6c0.4-1,0.5-2.2,0.3-3.3c-0.2-1.1-0.8-2.1-1.6-2.9
				c-0.8-0.8-1.8-1.4-2.9-1.6s-2.2-0.2-3.3,0.3c-1,0.4-2,1.1-2.6,2.1s-1,2-1,3.2c0,0.8,0.2,1.5,0.4,2.2c0.3,0.7,0.7,1.4,1.2,1.8
				c0.5,0.5,1.1,1,1.8,1.2C354,445.1,354.7,445.4,355.5,445.4z"
          />
        </G>
      </G>
      <G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,287.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,287.1,324.5,287.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,287.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,287.1,324.5,287.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M336.3,287.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,287.1,337.1,287.1,336.3,287.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,287.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,287.1,337.1,287.1,336.3,287.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,300.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,300.9,324.5,300.9z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,300.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,300.9,324.5,300.9z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M336.3,300.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,300.9,337.1,300.9,336.3,300.9z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,300.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,300.9,337.1,300.9,336.3,300.9z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,314.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,314.4,324.5,314.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,314.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,314.4,324.5,314.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M336.3,314.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,314.4,337.1,314.4,336.3,314.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,314.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,314.4,337.1,314.4,336.3,314.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,327.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,327.9,324.5,327.9z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,327.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,327.9,324.5,327.9z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M336.3,327.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,327.9,337.1,327.9,336.3,327.9z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,327.9h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,327.9,337.1,327.9,336.3,327.9z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M324.5,341.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,341.4,324.5,341.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.5,341.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6S325.2,341.4,324.5,341.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M336.3,341.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,341.4,337.1,341.4,336.3,341.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.3,341.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.4,341.4,337.1,341.4,336.3,341.4z"
          />
        </G>
        <Path fill="#AFD2DB" d="M378.2,287.1h-5.3v6.7h5.3V287.1z" />
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,287.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,287.1,388.7,287.1,388,287.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,287.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,287.1,388.7,287.1,388,287.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M364.3,299h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,299,365.1,299,364.3,299z"
          />
          <Path
            fill="#AFD2DB"
            d="M364.3,299h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,299,365.1,299,364.3,299z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M364.3,287h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,287,365.1,287,364.3,287z"
          />
          <Path
            fill="#AFD2DB"
            d="M364.3,287h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,287,365.1,287,364.3,287z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M349.8,299h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,299,350.6,299,349.8,299z"
          />
          <Path
            fill="#AFD2DB"
            d="M349.8,299h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,299,350.6,299,349.8,299z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M349.8,287h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6s0.2-0.7,0.2-1.4v-1c0-0.8,0-1.1-0.2-1.4
				s-0.3-0.4-0.6-0.6C350.9,287,350.6,287,349.8,287z"
          />
          <Path
            fill="#AFD2DB"
            d="M349.8,287h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6s0.2-0.7,0.2-1.4v-1c0-0.8,0-1.1-0.2-1.4
				s-0.3-0.4-0.6-0.6C350.9,287,350.6,287,349.8,287z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M364.3,342.8h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,342.8,365.1,342.8,364.3,342.8z"
          />
          <Path
            fill="#AFD2DB"
            d="M364.3,342.8h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C365.5,342.8,365.1,342.8,364.3,342.8z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M364.3,329.8h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.4-0.6,0.7c-0.2,0.3-0.2,0.8-0.2,1.7v1.2c0,1,0,1.4,0.2,1.7
				c0.2,0.3,0.3,0.5,0.6,0.7c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.4,0.6-0.7c0.2-0.3,0.2-0.8,0.2-1.7v-1.2
				c0-1,0-1.4-0.2-1.7c-0.2-0.3-0.3-0.5-0.6-0.7C365.5,329.8,365.1,329.8,364.3,329.8z"
          />
          <Path
            fill="#AFD2DB"
            d="M364.3,329.8h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.4-0.6,0.7c-0.2,0.3-0.2,0.8-0.2,1.7v1.2c0,1,0,1.4,0.2,1.7
				c0.2,0.3,0.3,0.5,0.6,0.7c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.4,0.6-0.7c0.2-0.3,0.2-0.8,0.2-1.7v-1.2
				c0-1,0-1.4-0.2-1.7c-0.2-0.3-0.3-0.5-0.6-0.7C365.5,329.8,365.1,329.8,364.3,329.8z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M349.8,342.8h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,342.8,350.6,342.8,349.8,342.8z"
          />
          <Path
            fill="#AFD2DB"
            d="M349.8,342.8h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,342.8,350.6,342.8,349.8,342.8z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M349.8,331h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,331,350.6,331,349.8,331z"
          />
          <Path
            fill="#AFD2DB"
            d="M349.8,331h-2.4c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v1c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h2.4c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-1
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C350.9,331,350.6,331,349.8,331z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M376,300.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,300.6,376.8,300.6,376,300.6z"
          />
          <Path
            fill="#AFD2DB"
            d="M376,300.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,300.6,376.8,300.6,376,300.6z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,300.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,300.6,388.7,300.6,388,300.6z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,300.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,300.6,388.7,300.6,388,300.6z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M376,314.5h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,314.5,376.8,314.5,376,314.5z"
          />
          <Path
            fill="#AFD2DB"
            d="M376,314.5h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,314.5,376.8,314.5,376,314.5z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,314.5h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,314.5,388.7,314.5,388,314.5z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,314.5h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,314.5,388.7,314.5,388,314.5z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M376,328h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6s0.2-0.7,0.2-1.4v-2.4c0-0.8,0-1.1-0.2-1.4
				s-0.3-0.4-0.6-0.6C377.2,328,376.8,328,376,328z"
          />
          <Path
            fill="#AFD2DB"
            d="M376,328h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6s0.2-0.7,0.2-1.4v-2.4c0-0.8,0-1.1-0.2-1.4
				s-0.3-0.4-0.6-0.6C377.2,328,376.8,328,376,328z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,328h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,328,388.7,328,388,328z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,328h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,328,388.7,328,388,328z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M376,341.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,341.4,376.8,341.4,376,341.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M376,341.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C377.2,341.4,376.8,341.4,376,341.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M388,341.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,341.4,388.7,341.4,388,341.4z"
          />
          <Path
            fill="#AFD2DB"
            d="M388,341.4h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C389,341.4,388.7,341.4,388,341.4z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M355.5,323c1.1,0,2.2-0.3,3.2-1s1.7-1.5,2.1-2.6c0.4-1,0.5-2.2,0.3-3.3c-0.2-1.1-0.8-2.1-1.6-2.9
				c-0.8-0.8-1.8-1.4-2.9-1.6s-2.2-0.2-3.3,0.3c-1,0.4-2,1.1-2.6,2.1s-1,2-1,3.2c0,0.8,0.2,1.5,0.4,2.2c0.3,0.7,0.7,1.4,1.2,1.8
				c0.5,0.5,1.1,1,1.8,1.2C354,322.8,354.7,323,355.5,323z"
          />
        </G>
      </G>
      <G>
        <Path fill="#AFD2DB" d="M377.3,361.6H372v6.7h5.3V361.6z" />
        <G>
          <Path
            fill="#AFD2DB"
            d="M387.1,361.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C388.2,361.6,387.8,361.6,387.1,361.6z"
          />
          <Path
            fill="#AFD2DB"
            d="M387.1,361.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C388.2,361.6,387.8,361.6,387.1,361.6z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M375.2,375.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C376.4,375.1,375.9,375.1,375.2,375.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M375.2,375.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C376.4,375.1,375.9,375.1,375.2,375.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M387.1,375.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C388.2,375.1,387.8,375.1,387.1,375.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M387.1,375.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C388.2,375.1,387.8,375.1,387.1,375.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M375.2,389h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C376.4,389,375.9,389,375.2,389z"
          />
          <Path
            fill="#AFD2DB"
            d="M375.2,389h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C376.4,389,375.9,389,375.2,389z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M387.1,389h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C388.2,389,387.8,389,387.1,389z"
          />
          <Path
            fill="#AFD2DB"
            d="M387.1,389h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C388.2,389,387.8,389,387.1,389z"
          />
        </G>
      </G>
      <G>
        <Path fill="#AFD2DB" d="M326.4,361.6h-5.3v6.7h5.3V361.6z" />
        <G>
          <Path
            fill="#AFD2DB"
            d="M336.1,361.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.2,361.6,336.8,361.6,336.1,361.6z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.1,361.6h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.2,361.6,336.8,361.6,336.1,361.6z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M324.2,375.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C325.4,375.1,325,375.1,324.2,375.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.2,375.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C325.4,375.1,325,375.1,324.2,375.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M336.1,375.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.2,375.1,336.8,375.1,336.1,375.1z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.1,375.1h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6c-0.2,0.3-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.2,375.1,336.8,375.1,336.1,375.1z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            fillOpacity={0.2}
            d="M324.2,389h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6s-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C325.4,389,325,389,324.2,389z"
          />
          <Path
            fill="#AFD2DB"
            d="M324.2,389h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6s-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C325.4,389,325,389,324.2,389z"
          />
        </G>
        <G>
          <Path
            fill="#AFD2DB"
            d="M336.1,389h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6s-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.2,389,336.8,389,336.1,389z"
          />
          <Path
            fill="#AFD2DB"
            d="M336.1,389h-1c-0.8,0-1.1,0-1.4,0.2s-0.4,0.3-0.6,0.6s-0.2,0.7-0.2,1.4v2.4c0,0.8,0,1.1,0.2,1.4
				s0.3,0.4,0.6,0.6c0.3,0.2,0.7,0.2,1.4,0.2h1c0.8,0,1.1,0,1.4-0.2s0.4-0.3,0.6-0.6c0.2-0.3,0.2-0.7,0.2-1.4v-2.4
				c0-0.8,0-1.1-0.2-1.4s-0.3-0.4-0.6-0.6C337.2,389,336.8,389,336.1,389z"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
