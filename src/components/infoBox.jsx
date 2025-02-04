import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
    if (!info) return <p>Loading...</p>;

    let COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://media.istockphoto.com/id/1628053299/photo/man-drinking-water-during-heat-wave.webp?a=1&b=1&s=612x612&w=0&k=20&c=6RvzqR7zQWRHu0nHgcem6XyYsrj0RU--kZXOnFJzfhI=";
    let RAIN_URL = "https://media.istockphoto.com/id/1856868830/photo/close-up-of-raindrops-on-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=pqYt3MBw1rrBeedSwPQ2Ef5pHnaO_D4MOUX3FXW5u4c=";

    // Convert Kelvin to Celsius
    const temperature = Number(info.temp) - 273.15;
    const humidity = Number(info.humidity);
    return (
       
        <div>
            <h2>{info.city_name} Weather</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={
                            humidity >= 80
                            ? RAIN_URL
                            : temperature <= 15
                                ? COLD_URL
                                : HOT_URL
                        }
                        alt={info.city_name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city_name}
                            {humidity >= 80
                                ? <ThunderstormIcon />
                                : temperature <= 15
                                    ? <AcUnitIcon />
                                    : <WbSunnyIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Weather: {info.weather} <br />
                            Temperature: {temperature.toFixed(2)}°C <br />
                            Feels Like: {(Number(info.feelsLike) - 273.15).toFixed(2)}°C <br />
                            Max Temp: {(Number(info.tempMax) - 273.15).toFixed(2)}°C <br />
                            Min Temp: {(Number(info.tempMin) - 273.15).toFixed(2)}°C <br />
                            Humidity: {humidity}%
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
            
        
    );
}
