margin=0;
let y;
function start()
{
  y=setInterval(run,100);

    function run()
    {
        if(margin==1400)
        {
            clearInterval(y);
            margin=0;
        }
        else
        {
        margin+=10;
       let x=document.getElementById("img");
       x.style.marginLeft=margin+'px';
        }
    }
}
function stop()
{
clearInterval(y)
}