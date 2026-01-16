/*

Question 10: Weather Dashboard with Advanced Error Handling
File: question10.js
Difficulty: Hard
Focus: Real-world async patterns, retry logic, timeouts

Build a weather data fetcher with retry logic and timeout handling.

// Simulated weather API - don't modify
function fetchWeather(city) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 4000;
        const shouldFail = Math.random() < 0.3;
        
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`Failed to fetch weather for ${city}`));
            } else {
                resolve({
                    city,
                    temperature: Math.floor(Math.random() * 35) + 10,
                    condition: ["Sunny", "Cloudy", "Rainy"][Math.floor(Math.random() * 3)]
                });
            }
        }, delay);
    });
}
Your tasks:

Implement fetchWithRetry(city, maxRetries = 3)

Retry failed requests up to maxRetries times
Wait 1 second between retries
Throw error if all retries fail

Implement fetchWithTimeout(promise, timeoutMs = 5000)
Reject if promise takes longer than timeoutMs
Return result if completes in time
Implement getWeatherForCities(cities)

Fetch weather for multiple cities
Use Promise.allSettled()
Return object with successful and failed results
Test with:

const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
Expected output format:

{
  successful: [
    { city: "Mumbai", temperature: 32, condition: "Sunny" },
    // ...
  ],
  failed: [
    { city: "Chennai", error: "Timeout exceeded" },
    // ...
  ],
  summary: {
    total: 5,
    successful: 3,
    failed: 2
  }
}
Requirements:

Implement all three functions
Use async/await throughout
Handle all errors gracefully
Log retry attempts
Use Promise.race() for timeout functionality
Bonus challenges:

Add exponential backoff (1s, 2s, 4s delays)
Implement caching to avoid duplicate requests
Add progress logging
*/


function fetchWeather(city) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 4000;
        const shouldFail = Math.random() < 0.3;
        
        setTimeout(() => {
            if (shouldFail) {
                console.log("Rejected")
                reject(new Error(`Failed to fetch weather for ${city}`));
            } else {
                console.log("Resolved")
                resolve({
                    city,
                    temperature: Math.floor(Math.random() * 35) + 10,
                    condition: ["Sunny", "Cloudy", "Rainy"][Math.floor(Math.random() * 3)]
                });
            }
        }, delay);
    });
}


async function fetchWithRetry(city, maxRetries = 3){
    while(maxRetries>0){
       try{
            const info = await fetchWeather(city)
            console.log(info)
            return info
       }catch{
            maxRetries --;

            if (maxRetries == 0){
                console.error("Weather could not be fetched")
                return
            }
            
            console.log("API failed....Retrying")
       }
    }
}

fetchWithRetry("ABC")


function fetchWithTimeout(promise, timeoutMs = 5000) {
  return Promise.race([promise,new Promise((request, reject) =>
      setTimeout(() => {
        console.log("Request timed out")
        reject(new Error("Request Timed out"));
      }, timeoutMs)
    )
  ]);
}

fetchWithTimeout(fetchWeather("ABC"), 5000)

async function multipleCities(cities){
    const result = await Promise.allSettled(cities.map(city=>fetchWeather(city)))

    const fulfilled = result.filter(res=>res.status === "fulfilled")
    const rejected = result.filter(res=>res.status === "rejected")

    console.log(fulfilled.length)
    console.log(rejected.length)

    return{
        "Success" : fulfilled.map(res => res.value),
        "Failure":rejected.map(res => res.value),
        "Summary":{
            "total" : result.length,
            "Fulfilled":fulfilled.length,
            "Rejected" : rejected.length
        }    }
}


const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
const res = await multipleCities(cities)
console.log(res)