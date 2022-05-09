let gender = "male"
let age = 20

if (gender == "male" || gender == "female") {
    if (gender == "male") {
        if (age >= 20 && age <= 30) {
            console.log("eligible for play cricket")
        }
        else {
            console.log("Age restricted")
        }
    } else {
        if (age >= 15 && age <= 25) {
            console.log("eligible for play crircket")
        } else {
            console.log("age restriction")
        }
    }
} else {
    alert("")
}