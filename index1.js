const getCountriesPopulation = () => 
{
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://restcountries.eu/rest/v2/all');
    xhr.responseType = "json";
    
    xhr.send();
    
    xhr.onload = () => 
    {
      const data =xhr.response;
      for(let i = 0;i<data.length;i++)
        {
          if(data[i].population > 100000000)
            { 
                const information = 
                {
                    name: `${data[i].name}`,
                    population:`${data[i].population}`
                }
            
             console.log(information);

            }
        }
    }
  }
  
  getCountriesPopulation();
  