// ArtistName

const ArtistName = ({ artists, externalUrl }) => {
    return (
        <p className="ArtistName">
            {artists.length > 0 ? (
                artists.map((artist, index) => (
                    <span key={artist.id}>
                        <a
                            href={artist.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer">
                            {artist.name}{" "}
                        </a>
                        {index < artists.length - 1 ? "& " : ""}
                    </span>
                ))
            ) : (
                "No artist information available"
            )}
        </p>
    );
};

export default ArtistName;
