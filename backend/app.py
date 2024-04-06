from flask import Flask, request, jsonify, redirect, url_for
from flask_cors import CORS # Import CORS
import json
import os

app = Flask (__name__)
CORS(app) # Enable CORS for all domains on all routes

users = []

@app.route('/signup', methods=['POST'])
def registerUser():
    new_user = request.get_json()
    if new_user[0]['username'] == 'Test':
        print("Test mode starting...")
        print("input:")
        test_username = new_user.get('username')
        print(test_username)
        if new_user.get('password'): 
            test_password = new_user.get('password')
            print(test_password)
        if new_user.get('email'):
            test_email = new_user.get('email')
            print(test_email)
        
        for user in users:
            print("below is current users form:")
            print(user)

        return jsonify({"registrationMessage": "Test finish, if no other message shows, represents need change print method in app.py"})
    
    if new_user.get('username') and new_user.get('password') and new_user.get('email'):
        new_username = new_user.get('username')
        for user in users:
            if user['username'] == new_username:
                return jsonify({"registrationMessage": "Username already taken!"})
        users.append(new_user)
        return jsonify({"registrationMessage": "Signup successful"})
    else:
        return jsonify({"registrationMessage": "element missing, try to input all elements needed or go to app.py change code."})


@app.route('/login', methods=['POST'])
def loginUser():
    user_input = request.get_json()
    for user in users:
        if user_input[0]['username'] == user['username']:
            if user_input[0]['password'] != user['password']:
                return jsonify({"AuthenticationMessage": "Wrong password"})
            return jsonify({"AuthenticationMessage": "Login successful"}), redirect(url_for('product_page'))
    return jsonify({"AuthenticationMessage": "User NotFound, please signup"})


products = [
    {
    "id": 1,
    "name": "Product 1",
    "description": "Description for Product 1",
    "price": 10.99,
    "image": 'images/product1.png'
    },
    {
    "id": 2,
    "name": "Product 2",
    "description": "Description for Product 2",
    "price": 20.99,
    "image": 'images/product2.jpg'
    },
    {
    "id": 3,
    "name": "Product 3",
    "description": "Description for Product 3",
    "price": 10.99,
    "image": 'images/product3.jpg'
    },
    {
    "id": 4,
    "name": "Product 4",
    "description": "Description for Product 4",
    "price": 10.99,
    "image": 'images/product4.jpg'
    },
    {
    "id": 5,
    "name": "Product 5",
    "description": "Description for Product 5",
    "price": 10.99,
    "image": 'images/product5.jpg'
    },
    {
    "id": 6,
    "name": "Product 6",
    "description": "Description for Product 6",
    "price": 10.99,
    "image": 'images/product6.jpg'
    },
    {
    "id": 7,
    "name": "Product 7",
    "description": "Description for Product 7",
    "price": 10.99,
    "image": 'images/product7.jpg'
    },
    {
    "id": 8,
    "name": "Product 8",
    "description": "Description for Product 8",
    "price": 10.99,
    "image": 'images/product8.jpg'
    },
    {
    "id": 9,
    "name": "Product 9",
    "description": "Description for Product 9",
    "price": 10.99,
    "image": 'images/product9.jpg'
    },
    {
    "id": 10,
    "name": "Product 10",
    "description": "Description for Product 10",
    "price": 10.99,
    "image": 'images/product10.jpg'
    }
]

@app.route ('/products', methods =['GET'])
def get_products () :
    productsList = products
    # Return all products wrapped in an object with a 'products ' key
    return jsonify({"products": productsList })


# @app.route('/products/add', methods =['POST'])
# def add_product() :
#     new_product = request.json
#     products = load_products()
#     new_product['id'] = len( products ) + 1
#     products.append( new_product )
#     with open ('products.json', 'w') as f :
#         json.dump({"products": products } , f )
#     return jsonify( new_product ) , 201






if __name__ == '__main__':
    app.run(debug=True)  