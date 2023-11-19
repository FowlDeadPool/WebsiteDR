# Data Manipulation libraries
import pandas as pd
from sklearn.model_selection  import train_test_split
from sklearn.neural_network import MLPRegressor
import joblib

df = pd.read_csv('Housing.csv')  # Load the dataset

x_train = df[['area', 'bedroom', 'stories', 'parking']]
y_train = df[['price']]

from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
scaler.fit(x_train)

x_train_scaled = scaler.transform(x_train)
x_train_scaled = pd.DataFrame(x_train_scaled, columns=x_train.columns)
X_train, X_test, Y_train, Y_test = train_test_split(df_x_scaled, df_y, test_size = 0.33, random_state = 5)

mlp = MLPRegressor(hidden_layer_sizes=(60), max_iter=1000)
mlp.fit(X_train, Y_train)
Y_predict = mlp.predict(X_test)

#Saving the machine learning model to a file
joblib.dump(mlp, "price_model.pkl")