import React, { useEffect, useState, lazy, Suspense } from 'react';
import './App.css';
import { connect } from "react-redux";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {fetchActivity, searchActivity, deleteActivity} from './redux/activity/fetch';
const ErrorBoundary = lazy(() =>
  import("./components/error_component/errorBoundary")
);
const List = lazy(() =>
  import('./components/list/list')
);

const App = ({getEvents, searchEvents, eventsList, Error, Loading, Message, deleteEvent, Delete}) => {

  const [searchTerm, setSearchTerm] = useState('');

  const searchList = (e) => {   //  Search List
    const id = e.target.value;

    if(id) {
      setSearchTerm(id);

    } else {
      setSearchTerm(null);
    }

  };

  const click = (details) => {  //  Delete List

    deleteEvent(details.id);

  }

  useEffect(() => {
    // Fetch
    getEvents();

  },[getEvents]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm);
      
      if (searchTerm) {
        searchEvents(searchTerm);
      } else if(searchTerm === null) {
        getEvents();
      }
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchEvents,searchTerm,getEvents])


  return (
    <React.Fragment>

      <div className="App">
        <Header searchList={searchList} />

        <main className="App-main">

          <Suspense fallback={<div> Lazy Loading </div>}>

            <ErrorBoundary>
              {Loading ? (

                  <h3>{Message}</h3>

                  ) : Error ? (

                    <h3>{Message}</h3>

                  ) :
                  Delete ? (

                    <h3>{Message}</h3>

                  ) :
                  (

                    eventsList.map((data) => {
                      return <List key={data.id} name={data} delet={click}/>
                    }

                  )
                )
              }
            </ErrorBoundary>
          </Suspense>
        </main>

        <Footer />
      </div>

    </React.Fragment>
  );
};

const mapStatetoProps = (state) => ({
  eventsList: state.event.eventsList,
  Error: state.event.error,
  Loading: state.event.loading,
  Message: state.event.message,
  Delete: state.event.delete
});

const mapDispatchToProps = {
  getEvents: fetchActivity,
  searchEvents: searchActivity,
  deleteEvent: deleteActivity
};

export default connect(mapStatetoProps, mapDispatchToProps)(App);
