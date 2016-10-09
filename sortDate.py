inputFile = open("unemployment.csv", "r")
sortedFile = open("unemployment2.csv", "w")
InputFileList=[]

#read header line
headerLine=inputFile.readline()

#create a list of input file
for line in inputFile:
    InputFileList.append(line.split(','))

#sort the dates
InputFileList.sort()

#write to output file
print(headerLine,file=outputFile)
for row in InputFileList:
    test=','.join(row)
    print(test,file=sortedFile)


#close files
inputFile.close()
sortedFile.close()



    






