

const Hero = () => {
    return (
          <div className="relative w-full flex flex-col items-center justify-center text-left text-[80px] text-white font-basis-grotesque-pro">
                <div className="w-[1440px] relative bg-slateblue-200 h-[1024px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_559px)] left-[calc(50%_-_864px)] rounded-[14px] bg-slateblue-200 w-[1728px] h-[1117px] overflow-hidden">
                            <img className="absolute top-[146px] left-[406px] w-[915.4px] h-[823.9px]" alt="" src="Group 1.svg" />
                      </div>
                      <div className="absolute top-[217px] left-[-680px] w-[576px] h-[309px]">
                            <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[576px]">Di Mengantar, delivery adalah suatu obsesi</div>
                      </div>
                      <img className="absolute top-[163px] left-[120px] rounded-lg w-[576px] h-[417px] overflow-hidden object-cover" alt="" src="Illustration.png" />
                      <div className="absolute top-[206px] left-[744px] w-[576px] flex flex-col items-start justify-start gap-10 text-[32px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-6">
                                  <b className="self-stretch relative">Mengantar adalah platform yang bertujuan untuk membantu mengelola pengiriman para seller.</b>
                                  <div className="self-stretch flex flex-col items-start justify-start gap-4 text-lg">
                                        <div className="self-stretch relative leading-7">
                                              <p className="m-0">
                                                    <b>{`Kita membantu agar pengirimanmu menjadi `}</b>
                                                    <i className="font-bold font-basis-grotesque-pro">delivered,</i>
                                                    <b>{` `}</b>
                                              </p>
                                              <p className="m-0">
                                                    <b>bukan returned</b>
                                              </p>
                                        </div>
                                        <div className="self-stretch flex flex-row items-start justify-start gap-2 text-sm text-black">
                                              <div className="flex-1 rounded-lg bg-white flex flex-row items-center justify-center py-2 px-4 gap-2">
                                                    <img className="w-6 relative h-6 object-cover" alt="" src="Mask group.png" />
                                                    <div className="relative font-medium">Dashboard Mantap</div>
                                              </div>
                                              <div className="flex-1 rounded-lg bg-white flex flex-row items-center justify-center py-2 px-4 gap-2">
                                                    <img className="w-6 relative h-6 overflow-hidden shrink-0 object-cover" alt="" src="auto-monitoring-icon-1.svg.png" />
                                                    <div className="relative font-medium">Auto-Monitoring</div>
                                              </div>
                                              <div className="flex-1 rounded-lg bg-white flex flex-row items-center justify-center py-2 px-4 gap-2">
                                                    <img className="w-6 relative h-6 overflow-hidden shrink-0 object-cover" alt="" src="seller-oriented-icon-1.svg.png" />
                                                    <div className="relative font-medium">Seller Oriented</div>
                                              </div>
                                        </div>
                                  </div>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-2 text-base">
                                  <div className="w-8 relative rounded-[240px] border-white border-solid border-[1px] box-border h-8 overflow-hidden shrink-0">
                                        <div className="absolute top-[0px] left-[-42.67px] flex flex-row items-start justify-start gap-[10.7px]">
                                              <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="1.svg" />
                                              <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="2.svg" />
                                        </div>
                                  </div>
                                  <div className="relative">Ayo Bergabung Sekarang</div>
                            </div>
                      </div>
                      <div className="absolute top-[810px] left-[calc(50%_-_600px)] rounded-2xl bg-white w-[1200px] overflow-hidden flex flex-row items-center justify-start p-6 box-border gap-12 text-2xl text-black">
                            <div className="w-[557px] flex flex-col items-start justify-start gap-4">
                                  <b className="self-stretch relative">Ekspedisi yang siap mengantar paketmu</b>
                                  <div className="self-stretch relative text-base text-dimgray">{`Kita berkomitmen untuk selalu berinovasi dan berimprovisasi agar performa pengiriman dan pengalaman kamu di Mengantar terus meningkat. `}</div>
                            </div>
                            <div className="w-[547px] relative h-[60px] overflow-hidden shrink-0 text-base text-darkslategray font-inter">
                                  <div className="absolute top-[2px] left-[0px] flex flex-row items-end justify-start gap-4">
                                        <div className="w-[170.8px] relative rounded-[100px] bg-white h-[55.5px]">
                                              <img className="absolute top-[calc(50%_-_12.75px)] left-[18px] w-[25px] h-[25.5px] object-cover" alt="" src="div.Ekspedisi-btn-icon.png" />
                                              <div className="absolute top-[17.75px] left-[53px] tracking-[0.32px] leading-[20.01px] font-semibold flex items-center w-[100.2px] h-5">JNE Express</div>
                                        </div>
                                        <div className="w-[198.7px] relative rounded-[100px] bg-white h-[55.5px]">
                                              <img className="absolute top-[calc(50%_-_12.75px)] left-[18px] w-[21px] h-[25.5px]" alt="" src="div.Ekspedisi-btn-icon.svg" />
                                              <div className="absolute top-[17.75px] left-[49px] tracking-[0.32px] leading-[20.01px] font-semibold flex items-center w-[132px] h-5">SiCepat Express</div>
                                        </div>
                                        <div className="w-[172.3px] relative rounded-[100px] bg-white h-[55.5px]">
                                              <img className="absolute top-[calc(50%_-_12.75px)] left-[18px] w-[25px] h-[25.5px] object-cover" alt="" src="div.Ekspedisi-btn-icon.png" />
                                              <div className="absolute top-[17.75px] left-[53px] tracking-[0.32px] leading-[20.01px] font-semibold flex items-center w-[101.7px] h-5">SAP Express</div>
                                        </div>
                                        <div className="w-[147px] relative rounded-[100px] bg-white h-[55.5px]">
                                              <img className="absolute top-[calc(50%_-_12.75px)] left-[18px] w-[21px] h-[25.5px] object-cover" alt="" src="div.Ekspedisi-btn-icon.png" />
                                              <div className="absolute top-[17.75px] left-[49px] tracking-[0.32px] leading-[20.01px] font-semibold flex items-center w-[80.3px] h-5">iDexpress</div>
                                        </div>
                                        <div className="w-[169.5px] relative rounded-[100px] bg-white h-[55.5px]">
                                              <img className="absolute top-[calc(50%_-_12.75px)] left-[18px] w-[25px] h-[25.5px] object-cover" alt="" src="div.Ekspedisi-btn-icon.png" />
                                              <div className="absolute top-[17.75px] left-[53px] tracking-[0.32px] leading-[20.01px] font-semibold flex items-center w-[98.8px] h-5">{`J&T Express`}</div>
                                        </div>
                                        <div className="w-[195px] relative rounded-[100px] bg-white h-[55.5px]">
                                              <img className="absolute top-[calc(50%_-_12.75px)] left-[18px] w-10 h-[25.5px] object-cover" alt="" src="div.Ekspedisi-btn-icon.png" />
                                              <div className="absolute top-[17.75px] left-[68px] tracking-[0.32px] leading-[20.01px] font-semibold flex items-center w-[109.4px] h-5">Ninja Express</div>
                                        </div>
                                        <div className="w-[170.8px] relative rounded-[100px] bg-white h-[55.5px]">
                                              <img className="absolute top-[calc(50%_-_12.75px)] left-[18px] w-[25px] h-[25.5px] object-cover" alt="" src="div.Ekspedisi-btn-icon.png" />
                                              <div className="absolute top-[17.75px] left-[53px] tracking-[0.32px] leading-[20.01px] font-semibold flex items-center w-[100.2px] h-5">JNE Express</div>
                                        </div>
                                        <div className="w-[198.7px] relative rounded-[100px] bg-white h-[55.5px]">
                                              <img className="absolute top-[calc(50%_-_12.75px)] left-[18px] w-[21px] h-[25.5px]" alt="" src="div.Ekspedisi-btn-icon.svg" />
                                              <div className="absolute top-[17.75px] left-[49px] tracking-[0.32px] leading-[20.01px] font-semibold flex items-center w-[132px] h-5">SiCepat Express</div>
                                        </div>
                                        <div className="w-[172.3px] relative rounded-[100px] bg-white h-[55.5px]">
                                              <img className="absolute top-[calc(50%_-_12.75px)] left-[18px] w-[25px] h-[25.5px] object-cover" alt="" src="div.Ekspedisi-btn-icon.png" />
                                              <div className="absolute top-[17.75px] left-[53px] tracking-[0.32px] leading-[20.01px] font-semibold flex items-center w-[101.7px] h-5">SAP Express</div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                </div>
                <div className="w-[1440px] relative bg-whitesmoke-100 h-[934px] overflow-hidden shrink-0 text-[35px]">
                      <div className="absolute top-[331px] left-[1192px] w-[363px] h-[447px]">
                            <div className="absolute top-[0px] left-[0px] w-[363px] h-[447px] opacity-[0]">
                                  <div className="absolute top-[245px] left-[0px] flex flex-col items-start justify-start gap-[35px]">
                                        <div className="w-[343px] relative leading-[47px] inline-block">"We are solution-seekers and bold builders."</div>
                                        <div className="relative text-xl">Atish Banerjea, Chief Information Officer</div>
                                  </div>
                                  <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-3.5 text-[22px]">
                                        <img className="w-8 rounded-[100px] h-8" alt="" src="Frame 7.svg" />
                                        <div className="relative">Read more</div>
                                  </div>
                            </div>
                      </div>
                      <div className="absolute bottom-[118px] left-[calc(50%_+_448px)] w-[343px] h-[471px]">
                            <img className="absolute bottom-[0px] left-[calc(50%_-_75.5px)] rounded-lg w-14 h-[471px] object-cover" alt="" src="06.png" />
                            <div className="absolute top-[12px] left-[0px] w-[343px] h-[447px] opacity-[0]">
                                  <div className="absolute top-[245px] left-[0px] flex flex-col items-start justify-start gap-[35px]">
                                        <div className="w-[343px] relative leading-[47px] inline-block">"People’s lives change once they’re able to connect."</div>
                                        <div className="relative text-xl">Limor Z., Engineering Manager</div>
                                  </div>
                                  <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-3.5 text-[22px]">
                                        <img className="w-8 rounded-[100px] h-8" alt="" src="Frame 7.svg" />
                                        <div className="relative">Read more</div>
                                  </div>
                            </div>
                      </div>
                      <div className="absolute bottom-[118px] left-[calc(50%_+_307px)] w-[343px] h-[522px]">
                            <img className="absolute bottom-[0px] left-[calc(50%_-_38.5px)] rounded-lg w-14 h-[522px] object-cover" alt="" src="05.png" />
                            <div className="absolute top-[37px] left-[0px] w-[343px] h-[447px] opacity-[0]">
                                  <div className="absolute top-[245px] left-[0px] flex flex-col items-start justify-start gap-[35px]">
                                        <div className="w-[343px] relative leading-[47px] inline-block">"We start from a position of putting people first."</div>
                                        <div className="relative text-xl">Arun Chandra, VP, Scaled Operations</div>
                                  </div>
                                  <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-3.5 text-[22px]">
                                        <img className="w-8 rounded-[100px] h-8" alt="" src="Frame 7.svg" />
                                        <div className="relative">Read more</div>
                                  </div>
                            </div>
                      </div>
                      <div className="absolute bottom-[118px] left-[calc(50%_+_225px)] w-[343px] h-[471px]">
                            <img className="absolute bottom-[0px] left-[calc(50%_-_60.5px)] rounded-lg w-14 h-[471px] object-cover" alt="" src="04.png" />
                            <div className="absolute top-[12px] left-[0px] w-[343px] h-[447px] opacity-[0]">
                                  <div className="absolute top-[245px] left-[0px] flex flex-col items-start justify-start gap-[35px]">
                                        <div className="w-[343px] relative leading-[47px] inline-block">"Learn something new; there’s nothing stopping you."</div>
                                        <div className="relative text-xl">Adriana V., Software Engineer</div>
                                  </div>
                                  <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-3.5 text-[22px]">
                                        <img className="w-8 rounded-[100px] h-8" alt="" src="Frame 7.svg" />
                                        <div className="relative">Read more</div>
                                  </div>
                            </div>
                      </div>
                      <div className="absolute bottom-[118px] left-[calc(50%_+_105px)] w-[373px] h-[522px]">
                            <img className="absolute bottom-[0px] left-[calc(50%_-_59.5px)] rounded-lg w-14 h-[522px] object-cover" alt="" src="03.png" />
                            <div className="absolute top-[37px] left-[0px] w-[373px] h-[447px] opacity-[0]">
                                  <div className="absolute top-[245px] left-[0px] flex flex-col items-start justify-start gap-[35px]">
                                        <div className="w-[343px] relative leading-[47px] inline-block">"To be a successful engineer, empathy is key."</div>
                                        <div className="relative text-xl">Nishita A., Software Engineering Manager</div>
                                  </div>
                                  <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-3.5 text-[22px]">
                                        <img className="w-8 rounded-[100px] h-8" alt="" src="Frame 7.svg" />
                                        <div className="relative">Read more</div>
                                  </div>
                            </div>
                      </div>
                      <div className="absolute bottom-[118px] left-[calc(50%_-_496px)] w-[680px] h-[522px] text-[32px]">
                            <img className="absolute bottom-[0px] left-[calc(50%_-_340px)] rounded-lg w-[680px] h-[522px] object-cover" alt="" src="02.png" />
                            <div className="absolute top-[261px] left-[104px] rounded-lg w-[472px] flex flex-col items-start justify-start gap-6">
                                  <b className="w-[376px] relative inline-block">
                                        <p className="m-0">{`100% gratis. `}</p>
                                        <p className="m-0">Tanpa syarat apapun.</p>
                                  </b>
                                  <div className="self-stretch relative text-xl">{`Bebas untuk mulai dan rasakan keunggulan dari Mengantar. `}</div>
                                  <div className="flex flex-row items-center justify-start gap-2 text-base">
                                        <div className="w-8 relative rounded-[240px] border-white border-solid border-[1px] box-border h-8 overflow-hidden shrink-0">
                                              <div className="absolute top-[0px] left-[-42.67px] flex flex-row items-start justify-start gap-[10.7px]">
                                                    <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="1.svg" />
                                                    <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="2.svg" />
                                              </div>
                                        </div>
                                        <div className="relative">Lihat Detail</div>
                                  </div>
                            </div>
                      </div>
                      <div className="absolute bottom-[118px] left-[calc(50%_-_773px)] w-[343px] h-[522px] text-[22px]">
                            <img className="absolute bottom-[0px] left-[calc(50%_+_3.5px)] rounded-lg w-14 h-[522px] object-cover" alt="" src="01.png" />
                            <div className="absolute top-[37px] left-[0px] w-[343px] h-[447px] opacity-[0]">
                                  <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-3.5">
                                        <img className="w-8 rounded-[100px] h-8" alt="" src="Frame 7.svg" />
                                        <div className="relative">Read more</div>
                                  </div>
                                  <div className="absolute top-[245px] left-[0px] flex flex-col items-start justify-start gap-[35px] text-[35px]">
                                        <div className="w-[343px] relative leading-[47px] inline-block">"Working here inspires me to think bigger than myself."</div>
                                        <div className="relative text-xl">Victoria B., Recruiter</div>
                                  </div>
                            </div>
                      </div>
                      <b className="absolute top-[137px] left-[122px] text-[40px] inline-block w-[470px] text-black">
                            <span>{`Keuntungan Kirim Paket di `}</span>
                            <span className="text-slateblue-200">Mengantar</span>
                      </b>
                </div>
                <div className="self-stretch bg-slateblue-100 h-[1634px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-20 px-6 box-border text-[40px]">
                      <div className="w-[1200px] flex flex-col items-start justify-start gap-20">
                            <div className="flex flex-col items-start justify-start">
                                  <b className="w-[584px] relative tracking-[-0.02em] flex items-center">Kita berfokus untuk membantu kamu agar pengiriman jadi lebih lancar dengan minim kendala.</b>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-12 text-base text-slateblue-100">
                                  <div className="self-stretch flex flex-row items-start justify-start gap-12">
                                        <div className="flex-1 relative shadow-[0px_1px_4px_rgba(148,_168,_190,_0.16),_0px_4px_8px_rgba(148,_168,_190,_0.12)] rounded-3xl bg-white border-whitesmoke-300 border-solid border-[0.5px] box-border h-[609.5px] overflow-hidden">
                                              <div className="absolute top-[40px] left-[40px] w-[496px] flex flex-col items-start justify-start gap-4">
                                                    <div className="relative tracking-[0.28px] uppercase font-medium">mengapa mengantar?</div>
                                                          <b className="self-stretch relative text-[28px] leading-9 capitalize text-gray">
                                                                <p className="m-0">Tidak ada lagi kekecewaan</p>
                                                                <p className="m-0">dengan pengiriman</p>
                                                          </b>
                                                          <div className="self-stretch relative text-xl tracking-[-0.02em] leading-7 font-inter text-dimgray">Mungkin ada, tapi tenang, kita di sini siap banget buat bantu. Kita kolab sama ekspedisi keren yang udah terpercaya, buat pastiin paketmu sampe dengan selamat dan minim masalah. Gak pake sulap, cuma komitmen aja.</div>
                                                          <div className="flex flex-row items-center justify-start gap-2 text-black">
                                                                <div className="w-8 relative rounded-[240px] border-black border-solid border-[1px] box-border h-8 overflow-hidden shrink-0">
                                                                      <div className="absolute top-[0px] left-[-42.67px] flex flex-row items-start justify-start gap-[10.7px]">
                                                                            <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="1.svg" />
                                                                            <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="2.svg" />
                                                                      </div>
                                                                </div>
                                                                <div className="relative">Lihat detailnya</div>
                                                          </div>
                                                          </div>
                                                          <img className="absolute h-[60.21%] w-[80.85%] top-[57.96%] right-[0%] bottom-[-18.18%] left-[19.15%] max-w-full overflow-hidden max-h-full" alt="" src="Character.svg" />
                                                          </div>
                                                          <div className="flex-1 relative shadow-[0px_1px_4px_rgba(148,_168,_190,_0.16),_0px_4px_8px_rgba(148,_168,_190,_0.12)] rounded-3xl bg-white border-whitesmoke-300 border-solid border-[0.5px] box-border h-[609.5px] overflow-hidden">
                                                                <div className="absolute top-[40px] left-[40px] w-[502px] flex flex-col items-start justify-start gap-4">
                                                                      <div className="relative tracking-[0.28px] uppercase font-medium">Apa pengalaman kita?</div>
                                                                            <b className="self-stretch relative text-[28px] leading-9 capitalize text-gray">Berpengalaman membuat platform yang user-friendly</b>
                                                                            <div className="self-stretch relative text-xl tracking-[-0.02em] leading-7 font-inter text-dimgray">Kita di sini untuk memastikan kamu punya pengalaman menyenangkan dalam mengatur dan mengirimkan pesanan. Dashboardnya sudah diatur agar super user-friendly. Soal duit COD? Tenang saja, bisa langsung cair begitu statusnya terkirim.</div>
                                                                                  <div className="flex flex-row items-center justify-start gap-2 text-black">
                                                                                        <div className="w-8 relative rounded-[240px] border-black border-solid border-[1px] box-border h-8 overflow-hidden shrink-0">
                                                                                              <div className="absolute top-[0px] left-[-42.67px] flex flex-row items-start justify-start gap-[10.7px]">
                                                                                                    <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="1.svg" />
                                                                                                    <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="2.svg" />
                                                                                              </div>
                                                                                        </div>
                                                                                        <div className="relative">Lihat detailnya</div>
                                                                                  </div>
                                                                                  </div>
                                                                                  <img className="absolute h-[98.14%] w-[35.28%] top-[57.96%] right-[8.11%] bottom-[-56.11%] left-[56.61%] max-w-full overflow-hidden max-h-full" alt="" src="Character.svg" />
                                                                                  </div>
                                                                                  </div>
                                                                                  <div className="w-[1200px] relative h-[609px] overflow-hidden shrink-0 text-[28px] text-gray">
                                                                                        <div className="absolute top-[0px] left-[0px] rounded-3xl bg-white w-[1200px] h-[609px]" />
                                                                                        <div className="absolute top-[40px] left-[40px] w-[502px] flex flex-col items-start justify-start gap-[26px]">
                                                                                              <b className="w-96 relative tracking-[-0.02em] leading-9 capitalize flex items-center">Semua ada di dashoard kamu</b>
                                                                                              <div className="self-stretch relative text-xl tracking-[-0.02em] leading-7 font-inter text-dimgray">Buat pesanan, cek statistik, fitur-fitur keren, sampai laporan? Semua gampang dan bisa langsung diakses. Dashboard kita? Simpel dan tampilannya rapi banget.</div>
                                                                                                    <div className="flex flex-row items-center justify-start gap-2 text-base text-black">
                                                                                                          <div className="w-8 relative rounded-[240px] border-black border-solid border-[1px] box-border h-8 overflow-hidden shrink-0">
                                                                                                                <div className="absolute top-[0px] left-[-42.67px] flex flex-row items-start justify-start gap-[10.7px]">
                                                                                                                      <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="1.svg" />
                                                                                                                      <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="2.svg" />
                                                                                                                </div>
                                                                                                          </div>
                                                                                                          <div className="relative">Lihat detailnya</div>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    <div className="absolute top-[-13px] left-[667px] flex flex-col items-start justify-center gap-4">
                                                                                                          <div className="w-[311.9px] relative h-[175px]">
                                                                                                                <img className="absolute top-[0px] left-[0px] w-[300px] h-[175px] overflow-hidden object-cover" alt="" src="Frame-38541.png.png" />
                                                                                                          </div>
                                                                                                          <img className="w-[485.3px] relative h-[210px] object-cover" alt="" src="div#brxe-34885b.png" />
                                                                                                          <img className="w-96 relative h-[219px] overflow-hidden shrink-0 object-cover" alt="" src="Frame-38540.png.png" />
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    </div>
                                                                                                    <div className="w-[1440px] bg-whitesmoke-100 flex flex-col items-center justify-center py-20 px-0 box-border text-base">
                                                                                                          <div className="w-[1200px] relative h-[609px] overflow-hidden shrink-0">
                                                                                                                <div className="absolute top-[0px] left-[0px] rounded-3xl bg-slateblue-100 w-[1200px] h-[609px]" />
                                                                                                                <div className="absolute top-[calc(50%_-_142.5px)] left-[104px] flex flex-col items-start justify-start gap-10">
                                                                                                                      <b className="w-[474px] relative text-[40px] flex text-whitesmoke-200 items-center h-[89px] shrink-0">Mengantar ke tujuan, bukan dikembalikan</b>
                                                                                                                      <div className="w-[399px] relative flex items-center">
                                                                                                                            <span className="w-full">
                                                                                                                                  <p className="m-0">
                                                                                                                                        <b>Lebih dari 2.000 seller telah kita bantu.</b>
                                                                                                                                  </p>
                                                                                                                                  <p className="m-0">Membantu mengantar kiriman adalah obsesi kita.</p>
                                                                                                                                  <p className="m-0">Kita selalu memaksimalkan delivery, apalagi jika itu COD. Pantang return sebelum diminta.</p>
                                                                                                                            </span>
                                                                                                                      </div>
                                                                                                                      <div className="w-[239px] flex flex-row items-center justify-start gap-2">
                                                                                                                            <div className="w-8 relative rounded-[240px] border-white border-solid border-[1px] box-border h-8 overflow-hidden shrink-0">
                                                                                                                                  <div className="absolute top-[0px] left-[-42.67px] flex flex-row items-start justify-start gap-[10.7px]">
                                                                                                                                        <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="1.svg" />
                                                                                                                                        <img className="w-8 relative h-8 overflow-hidden shrink-0" alt="" src="2.svg" />
                                                                                                                                  </div>
                                                                                                                            </div>
                                                                                                                            <div className="relative">Ayo Bergabung Sekarang</div>
                                                                                                                      </div>
                                                                                                                </div>
                                                                                                                <img className="absolute h-[187.14%] w-[109.75%] top-[-3.32%] right-[-59.75%] bottom-[-83.82%] left-[50%] max-w-full overflow-hidden max-h-full object-cover" alt="" src="sent-message/bro.png" />
                                                                                                          </div>
                                                                                                    </div>
                                                                                                    <div className="w-[1440px] shadow-[0px_0px_2px_rgba(148,_168,_190,_0.16),_0px_-2px_4px_rgba(148,_168,_190,_0.12)] bg-darkslateblue flex flex-col items-center justify-center py-20 px-6 box-border gap-20 text-sm font-inter">
                                                                                                          <div className="w-[1128px] hidden flex-row items-center justify-start gap-5">
                                                                                                                <div className="self-stretch w-44 flex flex-col items-start justify-start gap-5">
                                                                                                                      <div className="relative leading-5 font-semibold">Tersertifikasi Dari</div>
                                                                                                                      <img className="w-[138px] relative h-[63px] overflow-hidden shrink-0" alt="" src="ISO 27002.svg" />
                                                                                                                </div>
                                                                                                                <div className="self-stretch w-[103px] relative bg-lightsteelblue [transform:_rotate(90deg)]" />
                                                                                                                <div className="self-stretch w-[337px] flex flex-col items-start justify-start gap-5">
                                                                                                                      <div className="relative leading-5 font-semibold">Terlisensi Oleh</div>
                                                                                                                      <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-10">
                                                                                                                            <img className="w-[207px] relative h-[37.2px] overflow-hidden shrink-0" alt="" src="BI 1.svg" />
                                                                                                                            <img className="w-[89.4px] relative h-[33.9px]" alt="" src="g108.svg" />
                                                                                                                      </div>
                                                                                                                </div>
                                                                                                                <div className="self-stretch w-[103px] relative bg-lightsteelblue [transform:_rotate(90deg)]" />
                                                                                                                <div className="w-[349px] h-[103px] flex flex-col items-start justify-start gap-5">
                                                                                                                      <div className="relative leading-5 font-semibold">Member Dari</div>
                                                                                                                      <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-10">
                                                                                                                            <img className="w-[99.3px] relative h-[52px] overflow-hidden shrink-0" alt="" src="FINTECH 1.svg" />
                                                                                                                            <img className="w-[100.4px] relative h-8 overflow-hidden shrink-0" alt="" src="ASPI 1.svg" />
                                                                                                                            <img className="w-[50px] relative h-[50px] overflow-hidden shrink-0" alt="" src="APPUI 1.svg" />
                                                                                                                      </div>
                                                                                                                </div>
                                                                                                                <div className="self-stretch w-[103px] relative bg-lightsteelblue [transform:_rotate(90deg)]" />
                                                                                                                <div className="self-stretch w-[143px] flex flex-col items-start justify-start gap-5">
                                                                                                                      <div className="self-stretch relative leading-5 font-semibold">Terdaftar Di</div>
                                                                                                                      <img className="w-[143px] relative h-[63px] overflow-hidden shrink-0 object-cover" alt="" src="KOMINFO 1.png" />
                                                                                                                </div>
                                                                                                          </div>
                                                                                                          <div className="w-[1200px] flex flex-col items-center justify-center gap-16 text-base font-basis-grotesque-pro">
                                                                                                                <div className="self-stretch flex flex-col items-start justify-center">
                                                                                                                      <div className="self-stretch flex flex-row items-center justify-between gap-0">
                                                                                                                            <div className="flex flex-col items-start justify-start gap-[30px]">
                                                                                                                                  <img className="w-[182px] relative h-[34.7px] overflow-hidden shrink-0" alt="" src="Link → Mengantar_horizontal_blue.svg.svg" />
                                                                                                                                  <div className="w-[254px] flex flex-col items-start justify-start gap-[30px]">
                                                                                                                                        <div className="relative tracking-[-0.01em] leading-5">PT Mengantar Karya Bangsa</div>
                                                                                                                                        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-4 text-gainsboro">Jalan Danau Paniai, Madyopuro Kel., Kedungkandang Malang Kota, Indonesia</div>
                                                                                                                                  </div>
                                                                                                                            </div>
                                                                                                                            <div className="self-stretch w-[540px] flex flex-row items-start justify-end">
                                                                                                                                  <div className="flex flex-col items-start justify-start gap-5">
                                                                                                                                        <b className="relative leading-6">Kontak</b>
                                                                                                                                        <div className="flex flex-col items-start justify-start gap-6 text-sm">
                                                                                                                                              <div className="relative tracking-[-0.01em] leading-4">cs@mengantar.id (Email)</div>
                                                                                                                                              <div className="relative tracking-[-0.01em] leading-4">{`021 252 xxxx (Call) `}</div>
                                                                                                                                              <div className="relative tracking-[-0.01em] leading-4">0811 9956 xxx (WhatsApp)</div>
                                                                                                                                        </div>
                                                                                                                                  </div>
                                                                                                                            </div>
                                                                                                                      </div>
                                                                                                                </div>
                                                                                                                <div className="self-stretch flex flex-col items-start justify-start text-sm">
                                                                                                                      <div className="self-stretch relative bg-lightsteelblue h-px" />
                                                                                                                      <div className="self-stretch flex flex-row items-center justify-between pt-8 px-0 pb-0 gap-0">
                                                                                                                            <div className="flex flex-row items-end justify-start gap-6">
                                                                                                                                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0.5">
                                                                                                                                        <div className="relative font-medium">©2024 Mengantar Karya Bangsa</div>
                                                                                                                                  </div>
                                                                                                                                  <div className="flex flex-row items-start justify-center gap-4">
                                                                                                                                        <div className="flex flex-row items-start justify-start">
                                                                                                                                              <div className="relative leading-[21px]">Terms</div>
                                                                                                                                        </div>
                                                                                                                                        <div className="flex flex-row items-start justify-start">
                                                                                                                                              <div className="relative leading-[21px]">Privacy</div>
                                                                                                                                        </div>
                                                                                                                                  </div>
                                                                                                                            </div>
                                                                                                                            <div className="flex flex-row items-center justify-start gap-6">
                                                                                                                                  <div className="flex flex-row items-center justify-start">
                                                                                                                                        <div className="relative font-medium">Ikuti kami di</div>
                                                                                                                                  </div>
                                                                                                                                  <div className="flex flex-row items-center justify-start gap-[34px]">
                                                                                                                                        <img className="w-5 relative h-5" alt="" src="facebook.svg" />
                                                                                                                                        <img className="w-5 relative h-5" alt="" src="instagram.svg" />
                                                                                                                                        <img className="w-5 relative h-5" alt="" src="linkedin.svg" />
                                                                                                                                        <img className="w-5 relative h-5" alt="" src="tiktok.svg" />
                                                                                                                                  </div>
                                                                                                                            </div>
                                                                                                                      </div>
                                                                                                                </div>
                                                                                                          </div>
                                                                                                    </div>
                                                                                                    </div>);
                                                                                              };
                                                                                              
export default Hero;
                                                                                              