# Use official Python base image
FROM python:3.10-slim

# Set work directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Run the application
CMD ["gunicorn", "-b", "0.0.0.0:10000", "app:app"]
