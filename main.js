var i,j;
var alphabets=['A','B','C','D','E'];
for(i=0;i<5;i++)
{
    for(j=0;j<=i;j++)
    {
        document.write(alphabets[j]);
        alphabets+1;
    }
    document.write("<br>");
}