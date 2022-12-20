var values=[100,200,300,400,5000,879872936,673382];
var min=values[0];
function mainfun(getcalback)
{
    for(i=0;i<values.length;i++)
    {
        if(min>values[i])
        {
            min=values[i];
        }
    }
    document.write("Array values : " +values);
    document.write("<br>");
    getcalback();
}
function calbackfun()
{
    document.write("Minimum value : "+min);
}
mainfun(calbackfun);