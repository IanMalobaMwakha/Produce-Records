# Use the official .NET 6 SDK as the base image for building
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the .NET project files to the container
COPY Backend/*.csproj ./

# Restore the .NET project dependencies
RUN dotnet restore

# Copy the rest of the application files to the container
COPY . .

# Build the .NET application for release
RUN dotnet publish -c Release -o out

# Use a smaller image for running the .NET application
FROM mcr.microsoft.com/dotnet/aspnet:6.0

# Set the working directory in the container
WORKDIR /app

# Copy the built .NET application from the build stage
COPY --from=build /app/out .

# Expose the port your .NET application listens on (e.g., 5000)
EXPOSE 5000

# Define the entry point for running your .NET application
ENTRYPOINT ["dotnet", "Backend.dll"]
