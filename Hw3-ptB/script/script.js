function generatedMadLib()
{
    const holiday = document.getElementById("holiday").value || "Christmas ";
    const noun = document.getElementById("noun").value || " house";
    const verb = document.getElementById("verb").value || "stirring ";
    const animal = document.getElementById("animal").value || " mouse";
    const plural = document.getElementById("plural").value || "stocking ";
    const anothernoun = document.getElementById("anothernoun").value || " chimney";
    const person = document.getElementById("person").value || "St, Nicholas ";

    const madlipText = "'Twas the night before' " + holiday +',\n'+
     " " + "when all through the " + noun +'\n'+
    " Not a creature was " + verb + " ," +'\n'+
    "Not even a/n " + animal + " ;" +'\n'+
    "The " + plural + " were hung by the " + anothernoun + " with care" +'\n'+
    " In hopes that " + person + " soon would be there!";

    document.getElementById("madlipOutput").innerText = madlipText;
}