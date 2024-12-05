// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DataCenterTableManagementSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function DataCenterTableManagementSvgrepoComSvgIcon(
  props: DataCenterTableManagementSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1024 1024"}
      className={classNames("plasmic-default__svg", className, "icon")}
      version={"1.1"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M978.578 900.462L869.961 791.845c30.135-39.57 48.274-88.796 48.274-142.19a235.74 235.74 0 00-235.52-235.374 235.74 235.74 0 00-235.373 235.374 235.74 235.74 0 00235.447 235.52c53.467 0 102.692-18.14 142.19-48.274l108.616 108.544a31.525 31.525 0 0044.837 0 31.744 31.744 0 00.146-44.983zM510.903 649.655a172.105 172.105 0 01171.886-171.886 171.886 171.886 0 010 343.772 172.178 172.178 0 01-171.886-171.886zM781.166 271.14c0 17.554-14.263 31.744-31.817 31.744H431.397a31.744 31.744 0 010-63.488h317.952c17.554 0 31.817 14.19 31.817 31.744zM171.739 891.173h211.968a31.89 31.89 0 010 63.634H171.74c-58.368 0-106.057-47.543-106.057-106.057V283.063c0-14.263 5.12-28.087 14.263-39.058L240.421 53.102a57.417 57.417 0 0143.885-20.48h517.998c58.441 0 106.057 47.543 106.057 106.057v227.767a31.744 31.744 0 01-63.634 0v-227.84a42.423 42.423 0 00-42.277-42.35H336.018v183.881a50.688 50.688 0 01-50.98 50.176H129.39v518.51c0 23.332 19.017 42.35 42.35 42.35zM272.457 113.81L143.945 266.68h128.512V113.81zm79.506 476.16a31.744 31.744 0 000-63.634H240.64a31.744 31.744 0 000 63.634h111.323zm0 146.067a31.744 31.744 0 000-63.562H240.64a31.744 31.744 0 000 63.562h111.323zm31.744-353.207H240.64a31.744 31.744 0 000 63.56h143.067a31.744 31.744 0 000-63.56z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DataCenterTableManagementSvgrepoComSvgIcon;
/* prettier-ignore-end */
