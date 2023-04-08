const express = require('express')
const router = express.Router()
const axios = require('axios');
const TransactionModel = require('../../model/Transaction');

router.use(express.json())

router.get('/transactions', function(req,res){
    TransactionModel.find({}).then(function (transactionsResults) {
        res.send(transactionsResults)
    })
})

router.post('/add', (req, res) => {
    let newTransaction = new TransactionModel(req.body)
    newTransaction.save().then( () => {
        res.send(newTransaction + 'is Added!')

    })
   
})

router.delete('/delete/:transactionID', (req, res) => {
    let transactionID = req.params.transactionID

    TransactionModel.findOneAndDelete({ _id: transactionID }).then(function () {
        console.log('Deleted!');
        res.end()
    })
})

router.get('/sum/:category', function(req,res){
    let category = req.params.category
    
    TransactionModel.find({category:category}).then(function (transactionsResults) {
        let total = 0
        transactionsResults.forEach(transaction => total +=  transaction.amount)
        res.send({total: total})
    })
})

router.get('/breakdown', function(req,res){
   let breakdownResult = {}
    
    TransactionModel.find().then(function (transactionsResults) {
       for(let transaction of transactionsResults ){
        if(!breakdownResult[transaction.category]){
            breakdownResult[transaction.category] = transaction.amount
        }
        else{
            breakdownResult[transaction.category] += transaction.amount
        }
    }
        res.send(breakdownResult)
    })
})


/********************************************************************************* */

/*router.get('/search/:cityName', function (req, res) {
    let cityName = req.params.cityName

    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=f7d1335234d291b9a41653a43a0cac64`)
        .then(result => {
            let lat = result.data[0].lat
            let lon = result.data[0].lon

            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f7d1335234d291b9a41653a43a0cac64`).then(results => {

                let celsiusTemp = results.data.main.temp - 273.15
                let weatherDescription = results.data.weather[0].description
                let weatherIcon = `https://openweathermap.org/img/wn/${results.data.weather[0].icon}@2x.png`

                let relivantData = { name: cityName, temperature: parseFloat(celsiusTemp.toFixed(1)), condition: weatherDescription, conditionPic: weatherIcon }
                res.send(relivantData)
            })
        })
})

router.get('/savedCities', function (req, res) {

    WeatherModel.find({}).then(function (savedCitiesWeatherData) {
        res.send(savedCitiesWeatherData)
    })
})

router.delete('/delete/:cityName', (req, res) => {
    let cityName = req.params.cityName

    WeatherModel.findOneAndDelete({ name: cityName }).then(function () {
        console.log('Deleted!');
        res.end()
    })
})



router.post('/add', (req, res) => {
    let newCity = new WeatherModel(req.body)
    newCity.save().then( () => {
        res.send(newCity + 'is Added!')

    })
   
})
*/



module.exports = router
