const qBank = [
    {
        question:"The tallest building in the world is located in which city?", 
        answers:["London","Dubai","NewYork"],
        correct:"Dubai",
        qId:"1"
    },
    {
        question:"Which year was the original Toy Story film released in the US?", 
        answers:["2004","2000","1995"],
        correct:"1995",
        qId:"2"
    },
    {
        question:"Name the current UK Home Secretary.", 
        answers:["Sadiq Khan","Priti Patel","Gorden Brown"],
        correct:"Priti Patel",
        qId:"3"
    },
    {
        question:"Name the longest river in the UK.", 
        answers:["River Severn","Irewell","Indus"],
        correct:"River Severn",
        qId:"4"
    }
]

export default (n=1) => 
    Promise.resolve(qBank.sort(() => 0.5 - Math.random).slice(0, n));