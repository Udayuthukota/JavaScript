var library = [{ 'name': 'Saurabh', 'age': '30', 'occupation': "Team Leader" },
{ 'name': 'Anupriya', 'age': '32', 'occupation': "Team Leader" },
{ 'name': 'Kalyani', 'age': '25', 'occupation': "Programmer" },
{ 'name': 'Damodaran', 'age': '27', 'occupation': "Programmer" },
{ 'name': 'Krishnakath', 'age': '22', 'occupation': "Programmer" },
{ 'name': 'Venketraman', 'age': '28', 'occupation': "Programmer" }];
var obj = JSON.parse(library);

function compare(a, b) {
    if (a.age < b.age)
        return -1;
    else if (a.age > b.age)
        return 1;
    else return 0;
}
console.log(obj.sort(compare));
