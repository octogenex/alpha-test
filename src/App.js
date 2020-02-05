import React, { Component } from 'react';
import './App.css';
import People from './components/People';
class App extends Component {
  state =
    {
      peoples: [
        {
          id: 1,
          name: 'Rooms',
          currentCount: 1,
          isDisabled: false
        },
        {
          id: 2,
          name: 'Adults',
          currentCount: 0,
          isDisabled: false
        },
        {
          id: 3,
          name: 'Childs',
          currentCount: 0,
          isDisabled: false
        }]
    };
  decrementCounter = (id) => {
    this.setState({
      peoples: this.state.peoples.map((people) => {
        var aCount = this.state.peoples[1].currentCount;
        var cCount = this.state.peoples[2].currentCount;
        var rCount = this.state.peoples[0].currentCount;
        if (people.id === id) {
          if (people.id === 1)// this is a room
          {
            if (people.currentCount > 1) {
              people.currentCount -= 1;
              if (this.state.peoples[2].currentCount > 0) {
                var checkParam = aCount + cCount;
                for (var i = cCount; i > 0; --i) {
                  this.state.peoples[2].currentCount -= 1;
                }
              }
              if (this.state.peoples[2].currentCount == 0 && this.state.peoples[1].currentCount > this.checkRoomCapacity(this.state.peoples[0].currentCount)) {
                console.log(this.state.peoples[1].currentCount);
                this.state.peoples[1].currentCount -= this.getRoomCapacityOnDecreament(this.state.peoples[1].currentCount);
              }
            }
          }
          if (people.id === 2)// this is adults
          {
            if (people.currentCount > 1) {
              people.currentCount -= 1;
              if (this.state.peoples[0].currentCount > 1) {
                if (this.fallsInRange(people.currentCount) === true) {
                  console.log(this.fallsInRange(people.currentCount));
                  this.state.peoples[0].currentCount -= 1;
                }
              }
            }
          }
          if (people.id === 3)// this is a child
          {
            if (people.currentCount > 0) {
              people.currentCount -= 1;
              if (this.state.peoples[0].currentCount > 1) {
                if (this.fallsInRange(people.currentCount) === true) {
                  console.log(this.fallsInRange(people.currentCount));
                  this.state.peoples[0].currentCount -= 1;
                }
              }
            }
          }
        }
        return people;
      })
    });
  };
  increamentCounter = (id) => {
    this.setState({
      peoples: this.state.peoples.map((people) => {
        var aCount = this.state.peoples[1].currentCount;
        var cCount = this.state.peoples[2].currentCount;
        var rCount = this.state.peoples[0].currentCount;
        if (people.id === id) {
          if (people.id === 1)// this is a room
          {
            if (people.currentCount < 5) {
              people.currentCount += 1;
            }
          }
          if (people.id === 2)// this is a adults
          {
            if (people.currentCount < 20) {
              var ParamCheck = people.currentCount + cCount;
              if (ParamCheck >= this.checkRoomCapacity(this.state.peoples[0].currentCount)) {
                people.currentCount += 1;
                this.state.peoples[0].currentCount += 1;
              }
              else if ((people.currentCount <= this.checkVal(cCount))) {
                people.currentCount += 1;
              }
              else {
                people.currentCount += 1;
              }
            }
          }
          if (people.id === 3)// this is a child
          {
            if (people.currentCount < 20) {
              var ParamCheck = people.currentCount + aCount;
              if (ParamCheck >= this.checkRoomCapacity(this.state.peoples[0].currentCount)) {
                people.currentCount += 1;
                this.state.peoples[0].currentCount += 1;
              }
              else if ((people.currentCount <= this.checkVal(cCount))) {
                people.currentCount += 1;
              }
              else {
                people.currentCount += 1;
              }
            }
          }
        }
        return people;
      })
    });
  }
  checkRoomCapacity(room) {
    var min = 1;
    var max = 4;
    var count = max;
    for (var i = min; i <= room; i++) {
      count = 4;
      count = count * i;
    }
    return count;
  }
  getMinRoomCap(room) {
    if (room === 0) {
      room = 1;
    }
    var min = 1;
    var max = 4;
    var roomMax = max * room;
    var roomMin = (roomMax - max);
    if (roomMin <= 0) {
      roomMin = 1;
    }
    return roomMin;
  }
  getMaxRoomCap(room) {
    if (room === 0) {
      room = 1;
    }
    var max = 4;
    var roomMax = max * room;
    if (roomMax <= 0) {
      roomMax = 4;
    }
    return roomMax;
  }
  getRoomCapacityOnDecreament(val) {
    var room = this.state.peoples[0].currentCount;
    if (this.checkRoomCapacity(room) < val) {
      console.log("Decrement calc:", val - this.checkRoomCapacity(room), val, room);
      return (val - this.checkRoomCapacity(room));
    }
    else return val;
  }
  fallsInRange(val) {
    console.log(this.getMinRoomCap(this.state.peoples[0].currentCount), this.getMaxRoomCap(this.state.peoples[0].currentCount));
    if (this.getMinRoomCap(this.state.peoples[0].currentCount) < val && this.getMaxRoomCap(this.state.peoples[0].currentCount) > val) {
      //  if(val<4){
      return false;
    }
    else {
      return true;
    }
  }
  checkVal(val) {
    if (val === 1) {
      return 4;
    } else if (val === 2) {
      return 3;
    } else if (val === 3) {
      return 2;
    } else if (val === 4) {
      return 1;
    } else if (val === 0) {
      return 4;
    } else if (val >= 4) {
      return 0;
    }
  };
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <People
            peoples={this.state.peoples}
            decrementCounter={this.decrementCounter}
            increamentCounter={this.increamentCounter}
          />
        </div>
      </div>
    );
  }
}
export default App;
