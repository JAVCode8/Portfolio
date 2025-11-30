export function AboutMe() {
  return (
    <>
      <div className="flex flex-col items-center max-w-[1500px] m-0 mx-auto">
        <h1 className="text-[45px] text-center mt-15">John Aldrin Villa</h1>
        <div className="p-8">
          <p className="text-center max-w-[800px] mx-auto text-[20px] text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dicta aperiam tenetur totam perferendis, recusandae, blanditiis
            nesciunt pariatur voluptate eligendi, quibusdam hic excepturi alias
            delectus sapiente! Incidunt recusandae libero illo temporibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <img className="mx-auto w-75" src="images/user.png"/>
        </div>
      </div>
    </>
  );
}