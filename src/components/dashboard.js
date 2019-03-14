// App Page
import React, { Component } from "react";
import axios from "axios";
import Ping from "ping.js";

import domains from "../sites.json";
import { whoIs } from "../config.json";

import Domain from "./domain.js";

const ping = new Ping();

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domains
    };
  }
  fetchWhoIs(domainName) {
    return axios
      .get(`${whoIs.API_URL}?key=${whoIs.API_KEY}&domain=${domainName}`, {
        crossdomain: true
      })
      .then(res => {
        const { result } = res.data;
        return {
          createdDate: result.created,
          renewedDate: result.changed,
          expiryDate: result.expires
        };
      })
      .catch(err => console.log("Error Fetching Expiry Date", err));
  }
  checkDomain(domainName) {
    let className = "domain-block ";
    let domainDates = {};
    ping.ping("http://" + domainName, async (err, data) => {
      if (err) {
        className += "site-down";
        domainDates = {
          createdDate: "NA",
          renewedDate: "NA",
          expiryDate: "NA"
        };
        //console.log(domainName+" is unaccessible");
      } else {
        className += "site-up";
        //const domainDates = fetchWhoIs()
        //console.log(domainName+" is up");
      }
    });
    return (
      <Domain
        url={domainName}
        className={className}
        key={domainName}
        dates={domainDates}
      />
    );
  }
  render() {
    return (
      <div>
        <ul className="dashboard">
          {this.state.domains.map(domain => {
            return this.checkDomain(domain.url);
          })}
        </ul>
      </div>
    );
  }
}
