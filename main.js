var i,j;
var alphabets=['A','B','C','D','E'];
for(i=0;i<5;i++)
{
    for(j=0;j<=i;j++)
    {
        document.write(alphabets[j]);
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");
var i,j;
for(i=1;i<=5;i++)
{
    var alpha=65;
    for(j=1;j<=i;j++)
    {
        document.write(String.fromCharCode(alpha));
        alpha++;
    }
    document.write("<br>");
}