

#React weather app
Provides real time and forecast weather information for the selected locations.

##Project aim
the sole purpose of this project to help myself to gain a better understanding of:
- front-end
  - scss
  - react
  - redux
  - react-redux
  - redux-thunk
- back-end
  - node
  - express
- structuring
  - rest api design with swagger

This app will be implemented in different ways using the technologies mentioned above. 


#####Pure React
hard to mange the states where global updates are triggered by child component

==todos==
  - need to call weather api when location is changed.
  - need to add a section to display detailed weather forecast for the current day
  - display sunrise time for each day.
  - add a clock on the top of the page
  - implement theme changing feature according to day time and night time.

####==react+redux*==
can manage global states but code is composite.

#####react+ redux + react-redux + redux-thunk/redux-saga:
decomposition of react code and redux code

#####React + redux + react-redux+ nodejs + express
api服务分离