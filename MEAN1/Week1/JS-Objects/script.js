let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function challenge1(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Name: ", arr[i]['name'], ", Cohort: ", arr[i]['cohort'])
    }
}

challenge1(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function challenge2(usersObj) {
    for (key in usersObj) {
        console.log(key);
        for (let i = 0; i < usersObj[key].length; i++){

            console.log(i + 1 + ' - ' + usersObj[key][i]['last_name'] + ', ' + usersObj[key][i]['first_name']);
        }
    }
}

challenge2(users);