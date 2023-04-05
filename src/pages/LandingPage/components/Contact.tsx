export default function Contact() {
  const contactInfo = {
    mobile: "+91 9321878188",
    address:
      "46, morea link road, gwalior, iiitm campus",
    email: ["", ""],
  };

  return (
    <section
      id="contact"
      className="p-page text-center flex flex-col items-center pt-24"
    >
      <h1 className="text-4xl font-light text-primary">Contact Us</h1>
      <div className="flex justify-between items-end w-full my-10 mobile:hidden">
        <div className="relative basis-1/4 flex flex-col justify-end rounded-full aspect-square overflow-hidden group">
          <img
            src="https://imgs.search.brave.com/exWnKiuhl-eikNlgxQXRlyvLvZQAd4rXUMEizJNby7M/rs:fit:1200:960:1/g:ce/aHR0cHM6Ly9pbWcw/MC5kZXZpYW50YXJ0/Lm5ldC80NTYwL2kv/MjAxMC8wMjUvOS85/L2xhYm9yYXRvcnlf/MV9ieV9wZXRlYW1h/Y2hyZWUuanBn"
            alt="address"
            className="aspect-square w-full h-full object-cover"
          />
          <div className="absolute-center bg-primary rounded-full p-4 aspect-square w-20 flex justify-center items-center text-back z-[1]">
            <span className="material-icons text-3xl">&#xe0b0;</span>
          </div>
          <div className="absolute bottom-0 translate-y-full bg-primary w-full py-8 text-back duration-500 group-hover:translate-y-0">
            {contactInfo.mobile}
          </div>
        </div>
        <div className="relative basis-1/3 rounded-full overflow-hidden group">
          <img
            src="https://imgs.search.brave.com/FbC4XA0NB69_BqgJ41eKWpe5t7jy7zqRDxv-GgPHEfY/rs:fit:1024:563:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmLzcx/LzY2LzhmNzE2NjBm/NjE2ZTlkNjZmOWJk/MGU1OThiOTg0NTEx/LmpwZw"
            alt="address"
            className="aspect-square w-full"
          />
          <div className="absolute-center bg-primary rounded-full p-4 aspect-square w-20 flex justify-center items-center text-back z-[1]">
            <span className="material-icons text-3xl">&#xe0c8;</span>
          </div>
          <div className="absolute bottom-0 translate-y-full bg-primary w-full pt-4 pb-8 px-20 text-back duration-500 group-hover:translate-y-0">
            {contactInfo.address}
          </div>
        </div>
        <div className="relative basis-1/4 flex flex-col justify-end items-end rounded-full overflow-hidden group">
          <img
            src="https://imgs.search.brave.com/2YLQtIjZ0kjPuaAXcvyqW_eI48Jfw8Q--UaOoGCENPI/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzAzLzI3/LzIzODAwMi1kaWdp/dGFsX2FydC1udW1i/ZXJzLXRlY2hub2xv/Z3ktYmluYXJ5LWNv/ZGUtY29tcHV0ZXIt/YmxhY2tfYmFja2dy/b3VuZC1UaGVfTWF0/cml4LWdyZWVuLmpw/Zw"
            alt="address"
            className="aspect-square w-full"
          />
          <div className="absolute-center bg-primary rounded-full p-4 aspect-square w-20 flex justify-center items-center text-back z-[1]">
            <span className="material-icons text-3xl">&#xe158;</span>
          </div>
          <div className="absolute bottom-0 translate-y-full bg-primary w-full pt-4 pb-10 px-2 text-back duration-500 group-hover:translate-y-0">
            {contactInfo.email[0]}
            <br />
            {contactInfo.email[1]}
          </div>
        </div>
      </div>
      <div className="widescreen:hidden mt-8">
        <p>
          <span className="font-bold">Mobile :</span> {contactInfo.mobile}{" "}
        </p>
        <p>
          <span className="font-bold">Email :</span>{" "}
          {contactInfo.email.join(",  ")}{" "}
        </p>
        <p>
          <span className="font-bold">Address :</span> {contactInfo.address}{" "}
        </p>
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1789.1754127753475!2d78.17182665807128!3d26.25027499585435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDE1JzAxLjAiTiA3OMKwMTAnMjIuNSJF!5e0!3m2!1sen!2sin!4v1680289194024!5m2!1sen!2sin"
          width="1000"
          height="450"
          className="border-0 mt-32 mobile:w-[80vw]"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
