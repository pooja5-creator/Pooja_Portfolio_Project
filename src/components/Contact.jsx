
import InputBox from './InputBox';
import CirclesGroup from './CirclesGroup';

export default function Contact() {

  return (
    <div
      className="w-full px-4 min-h-[300px] bg-gray-950 flex justify-center items-center boxShadow2 py-[60px] flex-col gap-5"
      id="contact"
    >
      <h1 className="text-[30px] sm:text-4xl font-bold logo textColor">
        Let's Contact Me
      </h1>
      <div className="w-[130px] h-[1px] bg-gradient-to-t from-black to-orange-600"></div>
      <div className="w-[70px] h-[1px] bg-gradient-to-t bg-orange-600"></div>

      <div className="w-full min-h-[200px] flex justify-center items-center">
        <div
          className="w-[95%] lg:w-[90%] xl:w-[75%] min-h-[620px] md:min-h-[600px] bg-gray-950 rounded-2xl relative py-[50px]
       overflow-hidden boxShadow4 mt-5 sm:mt-0"
        >
          <CirclesGroup />

          <form
            name="contactUS" netlify
            className="w-full h-full flex justify-center items-center gap-5 flex-col px-8"
            
          >

            <InputBox
              labelName="Name"
              type="text"
              name="name"
              
            />
            <InputBox
              labelName="Email"
              type="email"
              name="email"
            />
            <div className="w-full sm:w-[500px] min-h-[150px] flex justify-center items-start gap-3 flex-col">
              <label htmlFor="message" className="text-gray-100 logo">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                className="w-full sm:w-[500px] min-h-[150px] border-[1px] border-dashed border-y-orange-600 border-x-gray-100 rounded-[2px] overflow-hidden text-gray-100 outline-none px-3 py-3 resize-none"
              />
            </div>

            <div className="w-full sm:w-[500px] flex justify-start items-start">
              <button
                type="submit"
                className="w-[70px] sm:w-[100px] h-[34px] sm:h-[40px] border-[1px] border-dashed border-y-white border-x-orange-600 rounded-[2px] text-orange-600 hover:bg-gray-100 text-[20px] sm:text-[23px] transition-all duration-150 ease-initial cursor-pointer font-semibold logo"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
