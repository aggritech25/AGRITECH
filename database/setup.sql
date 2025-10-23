CREATE DATABASE IF NOT EXISTS agritech_db;
USE agritech_db;

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    status ENUM('new', 'read', 'replied') DEFAULT 'new'
);

-- Add indexes for better performance
ALTER TABLE contacts ADD INDEX idx_email (email);
ALTER TABLE contacts ADD INDEX idx_created_at (created_at);
ALTER TABLE contacts ADD INDEX idx_status (status);