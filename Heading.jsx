// =======Single Color Span ======

import React from "react";

const Heading = ({ text }) => {
  let amin = text.replace("#", "<span class='one'>").replace("#", "</span>");

  return <h1 dangerouslySetInnerHTML={{ __html: amin }}></h1>;
};

export default Heading;

// =======Single Color Span End======

// =======Multiple Color Span With Regex
import React from "react";

function Heading({ text }) {
    let pattern = /#([^#]+)#/g;
    let textWithSpans = text.replace(pattern,"<span class='one'>$1</span>");
    return <h1 dangerouslySetInnerHTML={{ __html: textWithSpans }} />;
}

export default Heading;
// =======Multiple Color Span End 
