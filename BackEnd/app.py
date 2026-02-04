import os
import fastapi
import uvicorn
import pandas as pd
from pydantic import BaseModel
import tabulate

app = fastapi.FastAPI()

BaseFolder = os.path.dirname(os.path.abspath(__file__))
DateFolder = os.path.join(BaseFolder, '../Data')
HousesCsvPath = os.path.join(DateFolder, 'houses.csv')

class House(BaseModel):
        id: int
        name: str
        location: str
        price: int
        specifications: str
        healthScore: int
        image: str
try:
    HousesData = pd.read_csv(HousesCsvPath)
except Exception as e:
    print(f"Error reading CSV file: {e}")
    print("Please ensure you are in the correct directory (use pwd to check) and that the Data/houses.csv file exists.")
    HousesData = pd.DataFrame()
    quit()

print(tabulate.tabulate(HousesData, headers='keys', tablefmt='rounded_outline'))
print('')

def setup():
    print("Setup function called")

@app.get("/")
def root():
    return {"message": "Hello, World!"}

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)