let string1="hello";
let string2="hai";
let flag=0;
for(let index1=0;index1<string1.length;index1++)
{
    flag=0;
    for(let index2=0;index2<string2.length;index2++)
    {
        if(string1[index1]===string2[index2])
        {
            flag=1;
            break;
        }
    }
    if(flag===0) 
    {
        print(string1[index1]);
    }
}