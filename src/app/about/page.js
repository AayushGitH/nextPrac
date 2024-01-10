async function takeTime() {
  await new Promise((resolve)=>{
    setTimeout(resolve, 3000);
  });
}

export default async function about() {
  await takeTime();
  throw new Error('Manual error')
  return (
    <div><h2><b>About page</b></h2></div>
  );
}