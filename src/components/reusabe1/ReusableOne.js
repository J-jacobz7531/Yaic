import React from "react";
import pic from "../../assets/img/hero-bg.jpg";
// import pic1 from "../../assets/img/pics1.jpg";
// import pic2 from "../../assets/img/pics2.jpg";
import Button from "../button/Button";

export default function ReusableOne() {
  const [text, setText] = React.useState("");
  const [fullText, setFullText] = React.useState(
    "i love coding all the time and am very good at its"
  );
  console.log(fullText);
  const [index, setIndex] = React.useState(0);
  const tests = [
    {
      text: "My life is so good and i love it",
    },
    {
      text: "God is loving me and i praise him",
    },
    {
      text: "Am just being patient and ain't even trying to rush",
    },
  ];
  const handleSetText = () => {
    tests.map((item) => setFullText(item.text));
  };

  React.useEffect(() => {
    handleSetText();
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 50);
    }
  }, [index]);
  return (
    <div className="flex flex-col items-center justify-center space-y-10 bg-yellow-100 w-full h-max sm:p-8">
      <div className="flex items-center justify-center translate-y-3 py-4 px-6 h-10 rotate-12 bg-yellow-400 -skew-y-12">
        <h5 className="text-white text-xs font-normal">NEWS</h5>
      </div>

      <div className="flex flex-wrap space-x-6">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="max-w-sm sm:relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className=" object-cover h-48 w-96 "
              src={`${pic}`}
              alt="about aBi Development"
            />
          </div>
          <div className=" w-70 flex items-center justify-center translate-y-3 py-4 px-6 h-10 rotate-12 bg-green-600 -skew-y-12">
            <div className="text-white text-xs font-normal flex items-center justify-center">
              <h5 className="hover:transition duration-700 ease-in-out flex">
                June 7, 2022 /
                <span className="hover:text-yellow-400">
                  Development, <span>Finance</span>
                </span>
              </h5>
            </div>
          </div>
          <div className="bg-white shadow-lg w-96 h-20 p-4 static flex items-center justify-center">
            <p className="text-xs text-center">
              aBi Finance Ltd Secures Additional Funding from IFU & EU
            </p>
            <div className=" bottom-0">
              <Button text="Read More" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="max-w-sm sm:relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              className=" object-cover h-48 w-96 "
              src={`${pic}`}
              alt="about aBi Development"
            />
          </div>
          <div className=" w-70 flex items-center justify-center translate-y-3 py-4 px-6 h-10 rotate-12 bg-green-600 -skew-y-12">
            <div className="text-white text-xs font-normal flex items-center justify-center">
              <h5 className="hover:transition duration-700 ease-in-out flex">
                June 7, 2022/
                <span className="hover:text-yellow-400">
                  Development, <span>Finance</span>
                </span>
              </h5>
            </div>
          </div>
          <div className="bg-white shadow-lg  w-96 h-20 p-4 static flex items-center justify-center">
            <p className="text-xs text-center">
              Heifer International, aBi Development and Jesa Farm Dairy partner
              to accelerate dairy production
            </p>
            <div className="bottom-0">
              <Button text="Read More" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] border-solid bg-white flex items-center">
        <div className="bg-red-500 w-2/12 flex items-center justify-center p-2">
          <h5 className="text-xs text-white font-bold">ABI NEWS</h5>
        </div>
        <div className="px-2">
          <h2 className="font-bold text-base">{text}</h2>
        </div>
      </div>
    </div>
  );
}
