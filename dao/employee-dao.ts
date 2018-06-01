import aws from 'aws-sdk';
import {ConfigurationOptions} from 'aws-sdk/lib/config';
const awsConfig: ConfigurationOptions = {
  region: 'us-east-2',  
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

aws.config.update(awsConfig);

const dynamodb = new aws.DynamoDB();
const docClient = new aws.DynamoDB.DocumentClient(); // subset of functionality of dynamodb


//dynamodb.createTable({ } , ()=>{})

export function createEmpTable() {
    dynamodb.createTable({ 

        TableName:'movies',
        KeySchema: [
            {AttributeName: 'username', KeyType: 'HASH'}
           
          ],
          AttributeDefinitions: [
            {AttributeName: 'username', AttributeType: 'S'}
            
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 2,
            WriteCapacityUnits: 2
          }

    } , (err, data)=>{
        if(err) {
            console.log(`Unable to creat table: \n ${JSON.stringify(err, undefined, 2)}`);
          } else {
            console.log(`Created table: \n ${JSON.stringify(data, undefined, 2)}`);
          }

    });

}//end create a table 

export function saveEmp(emp): Promise<any> {
    return docClient.put({
      TableName: 'user',
      Item: emp
    }).promise();
  }

export function getEmp(username:string): Promise<any>{

return docClient.query({

TableName: 'user',
KeyConditionExpression: 'username= :uname' ,
/* 
*KeyConditionExpression works as the WHERE condition in SQL
*Provide all the items were the partition key username is equal 
to param username
*ExpressionAttributeNames: &&  ExpressionAttributeValues: to alias values 
respectively
//can be used for better reading of code
  */
 ExpressionAttributeValues: { // for aliasing actual values
  ':uname':username
},

}).promise()

}