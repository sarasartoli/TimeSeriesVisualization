inputFile = open("unemployment.csv", "r")
outputFile = open("unemployment2.csv", "w")
InputFileList=[]

#read header line
headerLine=inputFile.readline()

#create a list of input file
for line in inputFile:
    InputFileList.append(line.split(','))

#sort the dates
InputFileList.sort()

# add a row for unemployment average
    


#write to output file
print(headerLine,file=outputFile)
for row in InputFileList:
    test=','.join(row)
    print(test,file=outputFile)



#close files
inputFile.close()
outputFile.close()



    






