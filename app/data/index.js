import Parse from 'parse'

const parse = Parse.serverURL='http://52.14.179.101:80/parse/'
parse.initialize('f917188e6ef56273821b797ad09eae91a35d8a97', 'ad0f86b417246751414e2235427c36300f675b97')

export {parse}
{/*
    let install = new Parse.Installation();
    install.set("deviceType", navigator.userAgent);

    install.save().then((resp) => {
    console.log('Created install object', resp);

    this.setState({
        result: 'New object created with objectId: ' + resp.id
    })
    }, err => {
    console.log('Error creating install object', err);

    this.setState({
        result: 'Failed to create new object, with error code: ' + err.message
    })
    })
*/}