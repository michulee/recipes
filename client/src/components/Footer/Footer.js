import React, { useState } from "react";
import "./_Footer.scss";

export default function Footer(props) {
  const links = [
    {
      title: 'Column1',
      links: [
        {
          label: 'link1',
          url: '',
        },
        {
          label: 'link2',
          url: '',
        }
      ]
    }
  ]

  const Links = () => {
    const what = links.map((obj) => {
      console.log(obj)
    })
    return(
      <div>{what}</div>
    )
  }

  const LinksComponent = () => {
    // every index is a column
    
    return(
      <div>
        <Links/>
      </div>
    );
  }

  return (
    <div className="footer">
        <div>test</div>
        <div>test</div>
        <LinksComponent/>
    </div>
  );
}
