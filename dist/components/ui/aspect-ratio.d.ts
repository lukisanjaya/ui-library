import * as React from "react";
interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    ratio?: number;
}
declare const AspectRatio: React.ForwardRefExoticComponent<AspectRatioProps & React.RefAttributes<HTMLDivElement>>;
export { AspectRatio };
