# QueueHub - Mobile
Mobile application for the QueueHub service

# Requirements
XCode (iOS)
Android Studio (Android)

# How to Run
Open up one terminal and run
```
yarn
yarn start
```
Then, in the respective environment IDE, build the application and run it on a simulator. Or run 
```
react-scripts run-ios
```
or
```
react-scripts run-android
```

# Contribution Guide
In order to keep the codebase nice and tidy, there are a things to do in order to keep us accountable and streamline the dev process:

## Issues
All core features, enhancements, and bugs are outlined in Issues. 

## Branching
Create a new branch for a single bug fix or feature that you are trying to implement. 
**Keep branches to where they are only modifying a single component or aspect of the codebase.**

### Naming  
Branches should be named in the following fashion:
```
<initials>/<bug | feature>/<name of feature or bug fix>
```
Example:
```
zb/feature/add-homepage
```
## Merge Requests
Once you are finished with a feature and have done extensive testing on that component, create a MR into dev.
**All feature merge requests should be into dev**
Once you have issued the MR, get someone to sign off on it and make sure that it is good to go.
