# Overview
Repository for the fictional company TIMO created within OSGIS classes during the winter semester at HsKA. This project focuses on developing an application which gives information to those who visit karlsruhe about the locations of places which could be of interest to tourists. Data are dounloaded from open street map, filtered out and stored in postgresql database, publlished in geoserver and finally displayes in openlayers webgis client

# Database setup
Set up your PostgreSQL database by following the guide provided by the PostgreSQL wiki.

Create a database, either in pgAdmin or manually from the command line.

Set up the required extensions by executing the following queries on this new database:

CREATE EXTENSION postgis

CREATE EXTENSION hstore

# Getting data into the database

unzip the file

copy the karls.sql file into your directory

In the command line run the following code
$ psql -d your_db -f path_db.sql
 
 following -d write the name of the database that you have created and after -f write the path to the karls.sql

 # Publishing the data

Use Geoserver to publish the layers and style them accordingly

 # Prerequisites

It's hardly recommended that you have in your computer the following tools:
* Tomcat
* Geoserver
* PostgreSQL

NOTE: it's recommended to set the tomcat filter for CORS. In the web.xml, commonly stored in /opt/tomcat/conf/, type the following lines:
```
<filter>
  <filter-name>CorsFilter</filter-name>
  <filter-class>org.apache.catalina.filters.CorsFilter</filter-class>
  <init-param>
    <param-name>cors.allowed.origins</param-name>
    <param-value>*</param-value>
  </init-param>
  <init-param>
    <param-name>cors.allowed.methods</param-name>
    <param-value>GET,POST,HEAD,OPTIONS,PUT</param-value>
  </init-param>
  <init-param>
    <param-name>cors.allowed.headers</param-name>
    <param-value>Content-Type,X-Requested-With,accept,Origin,
Access-Control-Request-Method,Access-Control-Request-Headers</param-value>
  </init-param>
  <init-param>
    <param-name>cors.exposed.headers</param-name>
    <param-value>Access-Control-Allow-Origin,Access-Control-Allow-Credentials</param-value>
  </init-param>
</filter>
<filter-mapping>
  <filter-name>CorsFilter</filter-name>
  <url-pattern>/*</url-pattern>
</filter-mapping>

if the problem due to CORS still remains, run the following code
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

