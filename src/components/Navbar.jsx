const Navbar = () => {
      return (
          <div className="w-full overflow-x-hidden">
              <div className="max-w-screen-xl mx-auto shadow-[0px_8px_22px_-6px_rgba(24,_39,_75,_0.12),_0px_14px_64px_-4px_rgba(24,_39,_75,_0.12)] rounded-[40px] bg-white flex flex-col items-start justify-start py-4 px-6 my-16 box-border text-left text-base text-slateblue font-open-sans">
                  <div className="self-stretch flex flex-row items-center justify-start gap-6">
                      <div className="flex-1 h-12 flex flex-col items-start justify-center py-[7px] px-0 box-border">
                          <img className="w-[148px] relative h-[28.2px] overflow-hidden shrink-0" alt="" src="Mengantar_horizontal_blue.svg.svg" />
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-start gap-4">
                          <div className="self-stretch flex flex-row items-center justify-start py-0 px-6">
                              <div className="relative">Masuk</div>
                          </div>
                          <div className="rounded-[40px] bg-slateblue flex flex-row items-center justify-center py-2 px-6 gap-2 text-white">
                              <div className="relative">Registrasi</div>
                              <div className="w-6 relative rounded-[180px] border-white border-solid border-[0.9px] box-border h-6 overflow-hidden shrink-0">
                                  <div className="absolute top-[0px] left-[-32px] flex flex-row items-start justify-start gap-2">
                                      <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="1.svg" />
                                      <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="2.svg" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  };
  
export default Navbar;