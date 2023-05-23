import React from 'react';
import SubFaq from "../constants/faqsub.jsx";

function Faq() {
  const datas = [
    {
      title: "How do I modify the default theme of Ant Design?",
      question:
        "While you can override a component's style, we don't recommend doing so. antd is not only a set of React components, but also a design specification as well.",
    },
    {
      title: "How to avoid breaking change when update version?",
      question:
        "antd will avoid breaking change in minor & patch version. You can safe do follow thing  ",
    },
    {
      title: "How do I extend antd's components?",
      question:
        "If you need some features which should not be included in antd, try to extend antd's component with HOC.",
    },
  ];

  return (
    <div className=" font-['poppins'] bg-white w-11/12 h-3/4 m-auto mt-9  box-border  rounded-xl p-4">
      <h1 className="title">Faq</h1>
      <p className="  text-slate-700 py-2">Frequently asked questions </p>
      <div>{ datas.map(( data)=>{return <SubFaq data={data} />})}</div>
    </div>
  );
}

export default Faq