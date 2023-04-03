import useApi from "../../../contexts/ApiContext";

export default function Members() {
  const api = useApi();

  const leader = api.getPerson(0);
  const members = api.getMembers();

  return (
    <>
      <div className="mobile:h-20" />
      <section className="my-10 p-page">
        <h1 className="font-raleway text-center text-6xl font-medium my-8 mobile:mt-12">
          Group Leader
        </h1>
        <div className="p-8 mobile:p-0 widescreen:m-6 flex mobile:flex-col mobile:overflow-hidden border border-front border-opacity-40 shadow-lg widescreen:w-full rounded-lg ">
          <img
            src={leader.imageUrl}
            alt={leader.name}
            className="widescreen:w-1/5 aspect-square widescreen:rounded-full object-cover"
          />
          <div className="flex-1 flex flex-col gap-y-3 px-12 self-center">
            <p className="text-xl font-raleway font-semibold">{leader.name}</p>
            <p>Honour : {leader.title}</p>
            <p>
              Email :{" "}
              <a
                href={`mailto:${leader.email}`}
                className="text-secondary underline hover:no-underline"
              >
                {leader.email}
              </a>
            </p>
            <p>Research Themes : {leader.researchArea.join(", ")}</p>
            <p>Projects : {api.getPersonProjectNames(leader.id).join(", ")}</p>
          </div>
        </div>
      </section>
      {members.map((department) => (
        <>
          <section id={`members-${department.id}`} className="my-20 p-page">
            <h1 className="font-raleway text-center text-6xl font-medium">
              {department.title}
            </h1>
            <p className="text-center my-2 text-front text-opacity-50">
              These are the professors currently part of the Computer Vision and
              Multimedia Laboratory.
            </p>
          </section>
          <section className="my-10 p-page text-center flex flex-wrap justify-evenly gap-y-8 items-stretch">
            {department.members.map((personId) => {
              const person = api.getPerson(personId);
              return (
                <div className="widescreen:p-6 mobile:pb-5 rounded-lg shadow-md border border-front flex flex-col items-center w-[27%] mobile:w-[45%]
                 border-opacity-30 overflow-hidden duration-500 hover:scale-105">
                  <img
                    className="widescreen:rounded-full aspect-square object-cover widescreen:w-2/3 widescreen:my-5"
                    src={person.imageUrl}
                  ></img>
                  <h4 className="text-2xl mobile:text-lg font-semibold font-raleway">
                    {person.name}
                  </h4>
                  <p className="my-2 text-front text-opacity-70">
                    {" "}
                    {person.title}{" "}
                  </p>
                  <p className="flex gap-x-2 mobile:text-xs whitespace-nowrap mb-2">
                    Email :{" "}
                    <a
                      className="text-secondary"
                      href={`mailto:${person.email}`}
                    >
                      {person.email}
                    </a>
                  </p>
                  <p className="mb-2"><span className="font-bold">Research Themes : </span> {person.researchArea.join(", ")}</p>
                  <p><span className="font-bold">Projects : </span> {api.getPersonProjectNames(person.id).join(", ")}</p>


                </div>
              );
            })}
          </section>
        </>
      ))}
    </>
  );
}
