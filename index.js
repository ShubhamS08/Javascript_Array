// var btn = document.querySelector("button");
// var msg = document.getElementById("msg");
// var msg1 = document.getElementById("msg1");
// var msg2 = document.getElementById("msg2");
// var msg3 = document.getElementById("msg3");
// var msg4 = document.getElementById("msg4");
// var msg5 = document.getElementById("msg5");
// var msg6 = document.getElementById("msg6");
// var msg7 = document.getElementById("msg7");
// var msg8 = document.getElementById("msg8");

// btn.onclick = function()
// {
//     var name = (document.getElementById("search-button").value);

//     var index=0, upper=0, lower=0, space=0, digit=0, vowels=0, consonants=0, special=0, alpha;

//     for(index=0; index<name.length; index++)
//     {
//         alpha = name[index];

//         if(alpha>='A' && alpha<='Z')
//         {
//             if(alpha==='A' || alpha==='E' || alpha==='I' || alpha==='O' ||alpha==='U')
//             {
//                 vowels++;
//             }
//             else
//             {
//                 consonants++;
//             }
//             upper++;
//         }

//         else if(alpha>='a' && alpha<='z')
//         {
//             if(alpha==='a' || alpha==='e' || alpha==='i' || alpha==='o' || alpha==='u')
//             {
//                 vowels++;
//             }
//             else
//             {
//                 consonants++;
//             }
//             lower++;
//         }

//         else if(alpha>='0' && alpha<='9')
//         {
//             digit++;
//         }

//         else if(alpha===' ')
//         {
//             space++;
//         }
//         else
//         {
//             special++;
//         }
//     }

//     var flag=0, start=0, end=0;

//     end=name.length-1;

//     while(start<end/2)
//     {
//         if(name[start]!=name[end])
//         {
//             flag=1;
//             break;
//         }
//         start++;
//         end--;
//     }

//     if(flag==0)
//     {
//         var result = 'Yes';
//     }
//     else
//     {
//         var result = 'No';
//     }


//     msg.innerHTML = "<h4>" +upper+ "</h4>";
//     msg1.innerHTML = "<h4>" +lower+ "</h4>";
//     msg2.innerHTML = "<h4>" +vowels+ "</h4>";
//     msg3.innerHTML = "<h4>" +consonants+ "</h4>";
//     msg4.innerHTML = "<h4>" +digit+ "</h4>";
//     msg5.innerHTML = "<h4>" +space+ "</h4>";
//     msg6.innerHTML = "<h4>" +special+ "</h4>";
//     msg7.innerHTML = "<h4>" +index+ "</h4>";
//     msg8.innerHTML = "<h4>" +result+ "</h4>";
// };


var btn = document.querySelector("button");
var msg = document.getElementById("msg");
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var msg3 = document.getElementById("msg3");
var msg4 = document.getElementById("msg4");
var msg5 = document.getElementById("msg5");
var msg6 = document.getElementById("msg6");
var msg7 = document.getElementById("msg7");
var msg8 = document.getElementById("msg8");

function TotalLength(name)
{
    var index = name.length;
    msg7.innerHTML = "<h4>" +index+ "</h4>";
}

function TotalUppercases(name)
{
    var upper = 0;

    for(index=0; index<name.length; index++)
    {
        alpha = name[index];

        if(alpha>='A' && alpha<='Z')
        {
            upper++;
        }
    }
    msg.innerHTML = "<h4>" +upper+ "</h4>";
}

function TotalLowercases(name)
{
    index = 0;
    var lower = 0;

    for(index=0; index<name.length; index++)
    {
        alpha = name[index];

        if(alpha>='a' && alpha<='z')
        {
            lower++;
        }
    }
    msg1.innerHTML = "<h4>" +lower+ "</h4>";
}

function TotalVowels(name)
{
    index = 0;
    var vowels = 0;

    for(index=0; index<name.length; index++)
    {
        alpha = name[index];

        if(alpha==='A' || alpha==='E' || alpha==='I' || alpha==='O' || alpha==='U' 
        ||alpha==='a' || alpha==='e' || alpha==='i' || alpha==='o' || alpha==='u')
        {
            vowels++;
        }
    }
    msg2.innerHTML = "<h4>" +vowels+ "</h4>";
}

function TotalConsonants(name)
{
    index = 0;
    var consonants = 0;

    for(index=0; index<name.length; index++)
    {
        alpha = name[index];

        if(alpha>='A' && alpha<='Z')
        {
            if(alpha!='A' && alpha!='E' && alpha!='I' && alpha!='O' && alpha!='U')
            {
                consonants++;
            }
        }

        else if(alpha>='a' && alpha<='z')
        {
            if(alpha!='a' && alpha!='e' && alpha!='i' && alpha!='o' && alpha!='u')
            {
                consonants++;
            }
        }
    }
    msg3.innerHTML = "<h4>" +consonants+ "</h4>";
}

function TotalSpace(name)
{
    index = 0;
    var space = 0;

    for(index=0; index<name.length; index++)
    {
        alpha = name[index];

        if(alpha===" ")
        {
            space++;
        }
    }
    msg5.innerHTML = "<h4>" +space+ "</h4>";
}

function TotalSpecial(name)
{
    index = 0;
    var special = 0;

    for(index=0; index<name.length; index++)
    {
        alpha = name[index];

        if(alpha==="!" || alpha==="@" || alpha==="#" || alpha==="$" || alpha==="%" || alpha==="^" ||
        alpha==="&" || alpha==="*" || alpha==="(" || alpha===")" || alpha==="_" || alpha==="+")
        {
            special++;
        }
    }
    msg6.innerHTML = "<h4>" +special+ "</h4>";
}

function TotalDigits(name)           
{
    index = 0;

    var digit = 0;


    for(index=0; index<name.length; index++)
    {
        alpha = name[index];

        if(alpha>='0' && alpha<='9')
        {
            digit++;
        }
    }
    msg4.innerHTML = "<h4>" +digit+ "</h4>";
}

function Palindromes(name)
{
    index = 0;

    var flag=0, start=0, end=0;

    end=name.length-1;

    while(start<end/2)
    {
        if(name[start]!=name[end])
        {
            flag=1;
            break;
        }
        start++;
        end--;
    }

    if(flag==0)
    {
        var result = 'Yes';
    }
    else
    {
        var result = 'No';
    }
    msg8.innerHTML = "<h4>" +result+ "</h4>";
}

btn.onclick = function(name)
{
    var name = document.getElementById("search-button").value;

    TotalLength(name);
    TotalUppercases(name);
    TotalLowercases(name);
    TotalVowels(name);
    TotalConsonants(name);
    TotalSpace(name);
    TotalSpecial(name);
    TotalDigits(name);
    Palindromes(name);
}