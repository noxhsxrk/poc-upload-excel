# POC Upload Excel

this is just an POC for uploading and reading excel (xls, xlsx) file using `multer` for uploading and `xlsx` for reading

## How to start
### install dendencies
```
npm i
```
### start service
```
npm run dev
```

##API
###request
- /upload-excel
```
curl --location 'http://localhost:3000/api/upload-excel' \
--form 'excelFile=@"path/to/excel/file.xls"'
```

